import {HttpEvent, HttpHandlerFn, HttpRequest} from '@angular/common/http'
import {filter, Observable, switchMap, tap} from 'rxjs'
import {inject} from '@angular/core'
import {toObservable} from '@angular/core/rxjs-interop'
import {AuthService} from '../auth/services/auth.service'

export const authInterceptor = (
  request: HttpRequest<any>,
  next: HttpHandlerFn,
): Observable<HttpEvent<any>> => {
  const authService = inject(AuthService)
  const user$ = toObservable(authService.selectUser)

  return user$.pipe(
    filter((user) => !!user),
    switchMap(() => {
      console.log('Requesting:', request.url)
      return next(request)
    }),
  )
}
