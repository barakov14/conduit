import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {LoginUser, NewUser} from '../../../api-types/auth'
import {Errors} from '../../../api-types/error'
import {GetCurrentUser} from '../../../api-types/user'

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    login: props<{ data: LoginUser }>(),
    register: props<{ data: NewUser }>(),

    authSuccess: props<{ currentUser: GetCurrentUser }>(),

    authFailure: props<{ error: Errors }>(),

    getCurrentUser: props<{ currentUser: GetCurrentUser }>()
  }
});


