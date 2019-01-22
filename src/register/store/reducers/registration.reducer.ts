import * as fromRegistration from '../actions/registration.actions';

export interface PageItems {
  formData: any,

}

export interface RegistrationFormState {
  pages: {[id: string]: any};
  currentPage: string;
  loaded: boolean;
  loading: boolean;
}

export const initialState: RegistrationFormState = {
  pages: {},
  currentPage: '',
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromRegistration.RegistrationActions
): RegistrationFormState {
  switch (action.type) {
    case fromRegistration.SET_CURRENT_PAGE: {
      const currentPage = action.payload;
      return {
        ...state,
        currentPage
      };
    }
    case fromRegistration.LOAD_PAGE_ITEMS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromRegistration.LOAD_PAGE_ITEMS_SUCCSES: {
      const pages = {
        ...state.pages,
        [state.currentPage]: action.payload,
        loaded: true
      }

      return {
        ...state,
        pages,
        loading: false,
        loaded: true,
      };
    }


  }

  return state;
}

export const getRegistationFormPages = (state: RegistrationFormState) => state.pages;
export const getRegistrationFromLoading = (state: RegistrationFormState) => state.loading;
export const getRegistrationPizzasLoaded = (state: RegistrationFormState) => state.loaded;

