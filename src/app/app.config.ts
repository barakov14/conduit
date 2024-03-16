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
import {tokenInterceptor} from './core/auth/data-access/services/token-interceptor.service';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects'
import {authFeature} from './core/auth/data-access/+state/auth.reducer'
import {articleFeature} from './pages/article/data-access/+state/article.reducer'
import {profileFeature} from './pages/profile/data-access/+state/profile.reducer'
import {AuthEffects} from './core/auth/data-access/+state/auth.effects'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(withHttpTransferCacheOptions({
        includePostRequests: true,
    })),
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
    provideStore(
      {
        [authFeature.name]: authFeature.reducer,
        [articleFeature.name]: articleFeature.reducer,
        [profileFeature.name]: profileFeature.reducer
      }
    ),
    provideEffects(
      AuthEffects
    )
],
}
