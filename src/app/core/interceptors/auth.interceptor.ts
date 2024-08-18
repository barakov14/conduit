import {HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest} from '@angular/common/http'
import {catchError, Observable, throwError} from 'rxjs'
import {inject} from '@angular/core'
import {LocalStorageJwtService} from '../auth/services/local-storage-jwt.service'

export const authInterceptor = (
  request: HttpRequest<any>,
  next: HttpHandlerFn,
): Observable<HttpEvent<any>> => {
  const jwtService = inject(LocalStorageJwtService)

  const token = jwtService.getToken()

  if(token) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        jwtService.removeToken();
      }
      return throwError(() => error);
    })
  );
}
