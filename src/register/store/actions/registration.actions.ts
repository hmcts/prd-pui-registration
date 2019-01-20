// load registration form
export const LOAD_REGISTRATION_FORM = '[Registration] Load Registration From';
export const LOAD_REGISTRATION_FORM_SUCCESS = '[Registration] Load Registration From Success';
export const LOAD_REGISTRATION_FORM_FAIL = '[Registration] Load Registration From Fail';

export class LoadRegistrationForm {
  readonly type = LOAD_REGISTRATION_FORM;
}

export class LoadRegistrationFormSuccsess {
  readonly type = LOAD_REGISTRATION_FORM_SUCCESS;
  constructor(public payload) {}  // TODO add type
}

export class LoadRegistrationFormFail {
  readonly type = LOAD_REGISTRATION_FORM_FAIL;
  constructor(public payload: any) {}
}

