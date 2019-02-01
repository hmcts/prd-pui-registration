import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';
import { hot, cold } from 'jasmine-marbles';
import {EMPTY, Observable} from 'rxjs';
import { of } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import * as fromRegistrationEffects from './registration.effects';
import {RegistrationFormService} from '../../services/registration-form.service';
import {RegistrationEffects} from './registration.effects';
import {LoadPageItems} from '../actions/registration.actions';
import {LoadPageItemsFail, LoadPageItemsSuccess} from '../actions';
import {RouterTestingModule} from '@angular/router/testing';




describe('Registration Effects', () => {
  let actions$: Observable<any>;
  let effects: RegistrationEffects;
  const RegistrationFormServiceMock = jasmine.createSpyObj('RegistrationFormService', ['getRetistrationFrom']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
          {
            provide: RegistrationFormService,
            useValue: RegistrationFormServiceMock,
          },
          fromRegistrationEffects.RegistrationEffects,
          provideMockActions(() => actions$)
          // {
          //   provice: Actions,
          //   useFactory: getActions }
      ]
    });

    // actions$ = TestBed.get(Actions);
    effects = TestBed.get(RegistrationEffects);

  });
  describe('loadRegistrationForm$', () => {
    it('should return a loadRegistrationForm$, with data, on LoadPageItemsSuccess', () => {
      const pageId = 'something';
      RegistrationFormServiceMock.getRetistrationFrom.and.returnValue(of(pageId));
      const action = new LoadPageItems(pageId);
      const completion = new LoadPageItemsSuccess({payload: 'something', pageId});
      actions$ = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });
      expect(effects.loadRegistrationForm$).toBeObservable(expected);
    });
    it('shoud return a LoadPageItemsFail there is a falure', () => {

        const error = 'Service HTTP failure';
        const action = new LoadPageItems('pagename');
        const completion = new LoadPageItemsFail(error);

          // actions$.stream = hot('-a', { a: action});
        const responce = cold('-#', {}, error);
      const expected = cold('--b', { b: completion });
      RegistrationFormServiceMock.getRetistrationFrom.and.returnValue(responce);
      expect(RegistrationFormServiceMock.getRetistrationFrom).toHaveBeenCalled();
         // .andReturn(responce);
      // expected(effects.loadRegistrationForm$).toBeObservable(actions)
      // console.log('d', effects.loadRegistrationForm$)
      // expected(effects.loadRegistrationForm$).toBeObservable(new LoadPageItemsFail(error));

    })

  });


})
