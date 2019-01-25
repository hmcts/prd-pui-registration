import * as fromRegistration from '../actions/registration.actions';

export interface PageItems {
  formValues: any;
  meta: any;
  loading: boolean;
  loaded: boolean;
}

export interface RegistrationFormState {
  pages: {[id: string]: PageItems};
  pagesValues: {[id: string]: string}
  loaded: boolean;
  loading: boolean;
}

export const initialState: RegistrationFormState = {
  pages: {},
  pagesValues: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromRegistration.RegistrationActions
): RegistrationFormState {
  switch (action.type) {

    case fromRegistration.LOAD_PAGE_ITEMS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromRegistration.LOAD_PAGE_ITEMS_SUCCESS: {
      const pageId = action.payload.pageId;
      const payload = action.payload.payload;
      const pageItems = {
        ...payload,
        loaded: true,
        loading: false
      };

      const pages = {
        ...state.pages,
        [pageId]: pageItems
      };

      return {
        ...state,
        pages,
        loading: false,
        loaded: true,
      };
    }

    case fromRegistration.SAVE_FORM_DATA: {
      const pageId = action.payload.pageId;
      const formValue = action.payload.formValues;

      return {
        ...state,
        [pageId]: formValue
      }
    }
  }

  return state;
}

export const getRegistationFormPages = (state: RegistrationFormState) => state.pages;
export const getRegistrationFromLoading = (state: RegistrationFormState) => state.loading;
export const getRegistrationPizzasLoaded = (state: RegistrationFormState) => state.loaded;

