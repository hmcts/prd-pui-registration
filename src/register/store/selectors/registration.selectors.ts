import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../../store/reducers';
import * as fromRegistration from '../../store/reducers/registration.reducer';

export const getRegistrationState = createSelector(
  fromFeature.getRootRegState,
  (state: fromFeature.RegistrationState) => state.registration
);

export const getRegistrationPages = createSelector(
  getRegistrationState,
  fromRegistration.getRegistationFormPages
);

export const getCurrentPage = createSelector(
  fromRoot.getRouterState,
  (router) => router.state.params
);

export const getCurrentPageItems = createSelector(
  getRegistrationPages,
  fromRoot.getRouterState,
  (state, router) => state[router.state.params.pageId]
);




