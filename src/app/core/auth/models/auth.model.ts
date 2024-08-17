import {UserCredentials} from '../../../shared/models/user.model'
import {ErrorModel} from '../../../shared/models/error.model'
import {LoadingStatus} from '../../../shared/types/loading-status.type'

export interface ILoginUser {
  email: string
  password: string
}

export interface INewUser {
  username: string
  email: string
  password: string
}

export interface AuthState {
  authStatus: LoadingStatus
  user: UserCredentials | null | undefined
  error: ErrorModel | null
  loggedIn: boolean
}
