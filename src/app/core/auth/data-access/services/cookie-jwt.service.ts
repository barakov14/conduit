import {Observable, of} from 'rxjs'
import {inject, Injectable} from '@angular/core'
import {SsrCookieService} from 'ngx-cookie-service-ssr'

@Injectable({providedIn: 'root'})
export class CookieJwtService {
  private readonly cookieService = inject(SsrCookieService)
  getItem(): Observable<string | null> {
    const data = this.cookieService.get('jwtToken')
    if (data) {
      return of(data)
    }
    return of(null)
  }

  setItem(data: string): Observable<string> {
    this.cookieService.set('jwtToken', data)
    return of(data)
  }

  removeItem(): Observable<boolean> {
    this.cookieService.delete('jwtToken')
    return of(true)
  }
}
