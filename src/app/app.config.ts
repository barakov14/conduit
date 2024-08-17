import {routes} from './app.routes'
import {APP_INITIALIZER, ApplicationConfig, inject, PLATFORM_ID} from '@angular/core'
import {provideClientHydration, withHttpTransferCacheOptions} from '@angular/platform-browser'
import {provideRouter} from '@angular/router'
import {provideHttpClient, withInterceptors} from '@angular/common/http'
import {AuthService} from './core/auth/services/auth.service'
import {tap} from 'rxjs'
import {authInterceptor} from './core/interceptors/auth.interceptor'
import {API_URL} from './core/http/api-url.token'
import {environment} from '../environments/environment.development'
import {isPlatformBrowser} from '@angular/common'


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(withHttpTransferCacheOptions({
        includePostRequests: true,
    })),
    provideHttpClient(withInterceptors([authInterceptor])),
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        const platformId = inject(PLATFORM_ID)
        if(isPlatformBrowser(platformId) && !!localStorage.getItem('jwtToken')) {
          const authService = inject(AuthService)
          return () => authService.getCurrentUser().pipe(
            tap(userData => authService.setUserData(userData))
          )
        }
        return () => {}
      },
      deps: [AuthService],
      multi: true
    },
    {
      provide: API_URL,
      useValue: environment.api_url
    }
],
}
