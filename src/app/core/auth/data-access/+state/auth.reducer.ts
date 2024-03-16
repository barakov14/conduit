import {authInitialState} from '../auth.model'
import {createFeature, createReducer, on} from '@ngrx/store'
import {authActions} from './auth.actions'

export const authFeatureKey = 'auth'


export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    authInitialState,
    on(authActions.login, (state) => ({
      ...state,
      loadingStatus: 'loading' as const,
    })),
    on(authActions.register, (state) => ({
      ...state,
      loadingStatus: 'loading' as const,
    })),

    on(authActions.authSuccess, (state, action) => ({
      ...state,
      loadingStatus: 'loaded' as const,
      currentUser: action.currentUser
    })),

    on(authActions.authFailure, (state, action) => ({
      ...state,
      loadingStatus: 'error' as const,
      error: action.error
    })),

    on(authActions.getCurrentUser, (state, action) => ({
      ...state,
      loadingStatus: 'loaded' as const,
      currentUser: action.currentUser
    }))
  ),
});

