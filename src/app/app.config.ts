import {routes} from './app.routes'
import {
  APP_INITIALIZER,
  ApplicationConfig,
  inject,
  PLATFORM_ID,
} from '@angular/core'
import {
  provideClientHydration,
  withHttpTransferCacheOptions,
} from '@angular/platform-browser'
import {provideRouter} from '@angular/router'
import {provideHttpClient, withInterceptors} from '@angular/common/http'
import {AuthService} from './core/auth/services/auth.service'
import {EMPTY, Observable} from 'rxjs'
import {authInterceptor} from './core/interceptors/auth.interceptor'
import {API_URL} from './core/http/api-url.token'
import {environment} from '../environments/environment.development'
import {isPlatformBrowser} from '@angular/common'
import {LocalStorageJwtService} from './core/auth/services/local-storage-jwt.service'
import {UserCredentials} from './shared/models/user.model'

export function initAuth(): () => Observable<UserCredentials> {
  const platformId = inject(PLATFORM_ID)
  const jwtService = inject(LocalStorageJwtService)
  const authService = inject(AuthService)
  return () => {
    return isPlatformBrowser(platformId) && !!jwtService.getToken()
      ? authService.getCurrentUser()
      : EMPTY
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(
      withHttpTransferCacheOptions({
        includePostRequests: true,
      }),
    ),
    provideHttpClient(withInterceptors([authInterceptor])),
    {
      provide: APP_INITIALIZER,
      useFactory: initAuth,
      deps: [AuthService, LocalStorageJwtService],
      multi: true,
    },
    {
      provide: API_URL,
      useValue: environment.api_url,
    },
  ],
}
