import {inject, Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {AuthService} from '../services/auth.service'
import {authActions} from './auth.actions'
import {catchError, exhaustMap, map, of, switchMap, tap} from 'rxjs'
import {Router} from '@angular/router'
import {CookieJwtService} from '../services/cookie-jwt.service'

@Injectable({providedIn: 'root'})

export class AuthEffects {
  loginEffect$ = createEffect(
    (authService = inject(AuthService), actions$ = inject(Actions)) =>
      actions$.pipe(
        ofType(authActions.login),
        exhaustMap(
          ({ data }) =>
            authService.login(data).pipe(
              map((currentUser) => authActions.authSuccess({ currentUser })),
              catchError((error) => of(authActions.authFailure({error})))
            )
        )
      ), {functional: true}
  )
  registerEffect$ = createEffect(
    (authService = inject(AuthService), actions$ = inject(Actions)) =>
      actions$.pipe(
        ofType(authActions.register),
        exhaustMap(
          ({ data }) =>
            authService.login(data).pipe(
              map((currentUser) => authActions.authSuccess({ currentUser })),
              catchError((error) => of(authActions.authFailure({error})))
            )
        )
      ), {functional: true}
  )

  authSuccessEffect$ = createEffect(
    (router = inject(Router), actions$ = inject(Actions), cookieJwtService = inject(CookieJwtService)) =>
      actions$.pipe(
        ofType(authActions.authSuccess),
        tap((action) => {
           cookieJwtService.setItem(action.currentUser.user.token)
          router.navigateByUrl('/')
        })
      ), {functional: true}
  )

  getUserEffect$ = createEffect(
    (authService = inject(AuthService), actions$ = inject(Actions)) =>
      actions$.pipe(
        ofType(authActions.getCurrentUser),
        switchMap(
          () =>
            authService.getCurrentUser().pipe(
              map((currentUser) => authActions.getCurrentUser({ currentUser })),
              catchError((error) => of(authActions.authFailure({error})))
            )
        )
      ), {functional: true}
  )
}
