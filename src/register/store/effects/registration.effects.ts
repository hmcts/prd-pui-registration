import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import * as registrationActions from '../actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {RegistrationFormService} from '../../services/registration-form.service';
import {LoadPageItems} from '../actions';
import {Action} from '@ngrx/store';

@Injectable()
export class RegistrationEffects {
  constructor(
    private actions$: Actions,
    private registrationService: RegistrationFormService
  ) {}

  @Effect()
  loadRegistrationForm$: Observable<Action> = this.actions$.pipe(
    ofType<LoadPageItems>(registrationActions.LOAD_PAGE_ITEMS),
    map((action: registrationActions.LoadPageItems) => action.payload),
    switchMap((pageId: string) => {
      return this.registrationService.getRetistrationFrom(pageId).pipe(
        map(returnedItems => {
          // returnedItems to be passed as Object otherwise interactes each charater
          return new registrationActions.LoadPageItemsSuccess({payload: returnedItems, pageId});
        }),
        catchError(error => of(new registrationActions.LoadPageItemsSuccess(error)))
      );
    })
  );
}
