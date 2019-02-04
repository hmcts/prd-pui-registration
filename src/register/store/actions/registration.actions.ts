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
  constructor(public payload: Object) {}
}

export const POST_FORM_DATA = '[POST][Registration] form';
export const POST_FORM_DATA_SUCCESS = '[POST][Registration]  formSuccess';
export const POST_FORM_DATA_FAIL = '[POST][Registration] form Fail';


export class PostFormData implements Action {
  readonly type = POST_FORM_DATA;
  // constructor(public payload: any) {}
}

export class PostFormDataSuccess implements Action {
  readonly type = POST_FORM_DATA_SUCCESS;
  constructor(public payload: any) {}
}

export class PostFormDataFail implements Action {
  readonly type = POST_FORM_DATA_FAIL;
  constructor(public payload: any) {
  }
}

export type RegistrationActions =
  | SetCurrentPage
  | LoadPageItems
  | LoadPageItemsSuccess
  | LoadPageItemsFail
  | SaveFormData
  | PostFormData
  | PostFormDataSuccess
  | PostFormDataFail;
