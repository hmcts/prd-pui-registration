import { createSelector } from '@ngrx/store';

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
  getRegistrationState,
  (state) => state.currentPage
);

export const getCurrentPageItems = createSelector(
  getRegistrationPages,
  getCurrentPage,
  (state, current) => state[current]
);




