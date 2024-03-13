import {inject} from '@angular/core'
import {patchState, signalStore, withMethods, withState} from '@ngrx/signals'
import {authInitialState} from './auth.model'
import {AuthService} from './services/auth.service'
import {rxMethod} from '@ngrx/signals/rxjs-interop'
import {exhaustMap, pipe, switchMap, tap} from 'rxjs'
import {GetCurrentUser, LoginUser, NewUser} from '../../api-types/auth'
import {tapResponse} from '@ngrx/component-store'
import {LocalStorageJwtService} from './services/local-storage-jwt.service'
import {Router} from '@angular/router'
import {Errors} from '../../api-types/error'

export const AuthStore = signalStore(
  {providedIn: 'root'},
  withState(authInitialState),
  withMethods(
    (
      store,
      localStorageJwtService = inject(LocalStorageJwtService),
      router = inject(Router),
      authService = inject(AuthService),
    ) => ({
      register: rxMethod<NewUser>(
        pipe(
          tap(() => patchState(store, {loadingStatus: 'loading'})),
          exhaustMap((data) => {
            return authService.register(data).pipe(
              tapResponse({
                next: (res) => {
                  patchState(store, {
                    currentUser: res,
                    loggedIn: true,
                    loadingStatus: 'loaded',
                  })
                  localStorageJwtService.setItem(res.user.token)
                  router.navigateByUrl('/')
                },
                error: (error: Errors) =>
                  patchState(store, {error: error, loadingStatus: 'error'}),
              }),
            )
          }),
        ),
      ),
      login: rxMethod<LoginUser>(
        pipe(
          tap(() => patchState(store, {loadingStatus: 'loading'})),
          exhaustMap((data) => {
            return authService.login(data).pipe(
              tapResponse({
                next: (res) => {
                  patchState(store, {
                    currentUser: res,
                    loggedIn: true,
                    loadingStatus: 'loaded',
                  })
                  localStorageJwtService.setItem(res.user.token)
                  router.navigateByUrl('/')
                },
                error: (error: Errors) =>
                  patchState(store, {error: error, loadingStatus: 'error'}),
              }),
            )
          }),
        ),
      ),
      getCurrentUser: rxMethod<void>(
        pipe(
          tap(() => patchState(store, {loadingStatus: 'loading'})),
          switchMap(() => {
            return authService.getCurrentUser().pipe(
              tapResponse({
                next: (currentUser) =>
                  patchState(store, {loadingStatus: 'loaded', currentUser}),
                error: () => patchState(store, {loadingStatus: 'error'}),
              }),
            )
          }),
        ),
      ),
    }),
  ),
)
