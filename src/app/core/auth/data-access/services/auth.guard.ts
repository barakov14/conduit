import {inject} from '@angular/core'
import {map, Observable, take} from 'rxjs'
import {Router, UrlTree} from '@angular/router'
import {CookieJwtService} from './cookie-jwt.service'

export const authGuard = (): Observable<boolean | UrlTree> => {
  const storage = inject(CookieJwtService)
  const router = inject(Router)

  return storage.getItem().pipe(
    map((token) => {
      if (!token) {
        return router.parseUrl('/login')
      }
      return true
    }),
    take(1),
  )
}
