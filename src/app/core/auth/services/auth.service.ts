import {computed, inject, Injectable, signal} from '@angular/core'
import {UserCredentials} from '../../../shared/models/user.model'
import {from, Observable, switchMap, tap} from 'rxjs'
import {ApiService} from '../../http/api.service'
import {AuthState, ILoginUser, INewUser} from '../models/auth.model'
import {Router} from '@angular/router'
import {LocalStorageJwtService} from './local-storage-jwt.service'

@Injectable({providedIn: 'root'})
export class AuthService {
  private readonly httpClient = inject(ApiService)
  private readonly jwtService = inject(LocalStorageJwtService)
  private readonly router = inject(Router)

  // STATE

  public readonly authState = signal<AuthState>({
    authStatus: 'init',
    user: null,
    error: null,
    loggedIn: false,
  })

  // SELECTORS

  public selectAuthStatus = computed(() => this.authState().authStatus)
  public selectUser = computed(() => this.authState().user)
  public selectLoggedIn = computed(() => this.authState().loggedIn)
  public selectError = computed(() => this.authState().error)

  login(data: ILoginUser) {
    return this.httpClient
      .post<UserCredentials, ILoginUser>('/users/login', data)
      .pipe(
        tap((userCredentials) =>
          this.saveUserAndRedirect(userCredentials.user.token, userCredentials),
        ),
      )
  }

  register(data: INewUser) {
    return this.httpClient
      .post<UserCredentials, INewUser>('/users', data)
      .pipe(
        tap((userCredentials) =>
          this.saveUserAndRedirect(userCredentials.user.token, userCredentials),
        ),
      )
  }

  getCurrentUser(): Observable<UserCredentials> {
    return this.httpClient
      .get<UserCredentials>('/user')
      .pipe(
        tap((userCredentials) =>
          this.saveUserAndRedirect(userCredentials.user.token, userCredentials),
        ),
      )
  }

  private saveUserAndRedirect(jwtToken: string, user: UserCredentials) {
    this.jwtService.saveToken(jwtToken)
    // this.router.navigateByUrl('/')
    this.authState.update((state) => ({
      ...state,
      user,
      loggedIn: true,
    }))
  }
}
