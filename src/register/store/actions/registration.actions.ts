// load registration form
import {Action} from '@ngrx/store';

export const SET_CURRENT_PAGE = '[Registration] Set Current Page';

export const LOAD_PAGE_ITEMS = '[Registration] LoadPageItems';
export const LOAD_PAGE_ITEMS_SUCCSES = '[Registration] LoadPageItems Success';
export const LOAD_PAGE_ITEMS_FAIL = '[Registration] LoadPageItems Fail';


export class SetCurrentPage implements Action {
  readonly type = SET_CURRENT_PAGE;
  constructor(public payload: string) {}
}

export class LoadPageItems implements Action {
  readonly type = LOAD_PAGE_ITEMS;
  constructor(public payload: string) {}
}

export class LoadPageItemsSuccess implements Action {
  readonly type = LOAD_PAGE_ITEMS_SUCCSES;
  constructor(public payload: any) {}
}

export class LoadPageItemsFail implements Action {
  readonly type = LOAD_PAGE_ITEMS_FAIL;
  constructor(public payload: any) {}
}


export type RegistrationActions =
  | SetCurrentPage
  | LoadPageItems
  | LoadPageItemsSuccess
  | LoadPageItemsFail;
