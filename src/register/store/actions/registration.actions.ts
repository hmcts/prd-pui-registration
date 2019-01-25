// load registration form
import {Action} from '@ngrx/store';

export const SET_CURRENT_PAGE = '[Registration] Set Current Page';

export const LOAD_PAGE_ITEMS = '[Registration] LoadPageItems';
export const LOAD_PAGE_ITEMS_SUCCESS = '[Registration] LoadPageItems Success';
export const LOAD_PAGE_ITEMS_FAIL = '[Registration] LoadPageItems Fail';

export const SAVE_FORM_DATA = '[Registration] Save Form Data';


export class SetCurrentPage implements Action {
  readonly type = SET_CURRENT_PAGE;
  constructor(public payload: string) {}
}

export class LoadPageItems implements Action {
  readonly type = LOAD_PAGE_ITEMS;
  constructor(public payload: string) {}
}

export class LoadPageItemsSuccess implements Action {
  readonly type = LOAD_PAGE_ITEMS_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadPageItemsFail implements Action {
  readonly type = LOAD_PAGE_ITEMS_FAIL;
  constructor(public payload: any) {
  }
}

export class SaveFormData implements Action {
  readonly type = SAVE_FORM_DATA;
  constructor(public payload: {pageId: string; formValues: Object}) {}
}



export type RegistrationActions =
  | SetCurrentPage
  | LoadPageItems
  | LoadPageItemsSuccess
  | LoadPageItemsFail
  | SaveFormData;
