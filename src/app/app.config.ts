import {ApplicationConfig} from '@angular/core'
import {provideRouter} from '@angular/router'
import {routes} from './app.routes'
import {
  provideClientHydration,
  withHttpTransferCacheOptions,
} from '@angular/platform-browser'
import {environment} from '../environments/environment.development'
import {API_URL, STORAGE_URL} from './core/http/api-url.token'
import {provideHttpClient, withInterceptors} from '@angular/common/http'
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async'
import {tokenInterceptor} from './core/auth/data-access/services/token-interceptor.service'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(
      withHttpTransferCacheOptions({
        includePostRequests: true,
      }),
    ),
    {
      provide: API_URL,
      useValue: environment.api_url,
    },
    {
      provide: STORAGE_URL,
      useValue: environment.storage_url,
    },
    provideHttpClient(withInterceptors([tokenInterceptor])),
    provideAnimationsAsync(),
  ],
}
