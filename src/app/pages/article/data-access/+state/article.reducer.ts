import {createFeature, createReducer} from '@ngrx/store'
import {articleInitialState} from '../article.model'

export const articleFeature = createFeature({
  name: 'article',
  reducer: createReducer(
    articleInitialState,
    /*    on(authActions.login, (state) => ({
          ...state,
          authStatus: 'loading' as const,
        })),*/
  ),
});

