import {createFeature, createReducer} from '@ngrx/store'
import {profileInitialState} from '../profile.model'

export const profileFeature = createFeature({
  name: 'profile',
  reducer: createReducer(
    profileInitialState,
    /*    on(authActions.login, (state) => ({
          ...state,
          authStatus: 'loading' as const,
        })),*/
  ),
});

