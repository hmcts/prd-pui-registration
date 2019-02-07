import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';
import { hot, cold } from 'jasmine-marbles';
import { Observable } from 'rxjs';
// import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import * as fromRegistrationEffects from './registration.effects';
import {RegistrationFormService} from '../../services/registration-form.service';
import {RegistrationEffects} from './registration.effects';
import {LoadPageItems} from '../actions/registration.actions';
import {LoadPageItemsSuccess} from '../actions';

// export class TestActions extends Actions {
//   constructor() {
//     // super(empty());
//   }
//
//   // set stream(source: Observable<any>) {
//   //   this.source = source;
//   // }
// }

// export function getActions() {
//   return new TestActions();
// }


describe('Registration Effects', () => {
  let actions$;
  let effects: RegistrationEffects;
  const RegistrationFormServiceMock = jasmine.createSpyObj('RegistrationFormService', [
    'getRegistrationForm',
  ]);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
          {
            provide: RegistrationFormService,
            useValue: RegistrationFormServiceMock,
          },
          fromRegistrationEffects.RegistrationEffects,
          provideMockActions(() => actions$)
          // { provice; Actions, useFactory: getActions }
      ]
    });

    // actions$ = TestBed.get(Actions);
    effects = TestBed.get(RegistrationEffects);

  });
  describe('loadRegistrationForm$', () => {
    it('should return a collection from loadRegistrationForm$ - LoadPageItemsSuccess', () => {
      const pageId = 'something';
      RegistrationFormServiceMock.getRegistrationForm.and.returnValue(of(pageId));
      const action = new LoadPageItems(pageId);
      const completion = new LoadPageItemsSuccess({payload: 'something', pageId});
      actions$ = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });
      expect(effects.loadRegistrationForm$).toBeObservable(expected);
    });
  });


})
