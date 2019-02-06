import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import * as registrationActions from '../actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {RegistrationFormService} from '../../services/registration-form.service';

import {select, Store} from '@ngrx/store';
import {withLatestFrom} from 'rxjs/internal/operators';
import {RegistrationState} from '../reducers';
import {getRegistrationPagesValues} from '../selectors';

@Injectable()
export class RegistrationEffects {
  constructor(
    private actions$: Actions,
    private registrationService: RegistrationFormService,
    private store: Store<RegistrationState>
  ) {}

  @Effect()
  loadRegistrationForm$ = this.actions$.pipe(
    ofType(registrationActions.LOAD_PAGE_ITEMS),
    map((action: registrationActions.LoadPageItems) => action.payload),
    switchMap((pageId) => {
      return this.registrationService.getRegistrationForm(pageId).pipe(
        map(returnedItems => {
          return new registrationActions.LoadPageItemsSuccess({payload: returnedItems, pageId});

        }),
        catchError(error => of(new registrationActions.LoadPageItemsSuccess(error)))
      );
    })
  );

  @Effect()
  postRegistrationFormData$ = this.actions$.pipe(
    ofType(registrationActions.POST_FORM_DATA),
    withLatestFrom(this.store.pipe(select(getRegistrationPagesValues))),
    switchMap(([payload,  store]) => {
      return this.registrationService.postRegistrationForm(store).pipe(
        map(obj => {
          return new registrationActions.PostFormDataSuccess(store);
        }),
        catchError(error => of(new registrationActions.PostFormDataFail(error)))
    );
    })
  );


}
