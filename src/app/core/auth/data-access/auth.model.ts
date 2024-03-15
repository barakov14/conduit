import {Errors} from '../../api-types/error'
import {LoadingStatus} from '../../data-access/loading-status.type'
import {GetCurrentUser} from '../../api-types/user'

export type AuthState = {
  currentUser: GetCurrentUser | null | undefined
  loadingStatus: LoadingStatus
  error: Errors | null
  loggedIn: boolean
}
export const authInitialState: AuthState = {
  currentUser: null,
  loadingStatus: 'init',
  error: null,
  loggedIn: localStorage.getItem('jwtToken') !== null,
}
