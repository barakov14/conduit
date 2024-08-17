import {routes} from './app.routes'
import {ApplicationConfig} from '@angular/core'
import {provideClientHydration, withHttpTransferCacheOptions} from '@angular/platform-browser'
import {provideRouter} from '@angular/router'


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(withHttpTransferCacheOptions({
        includePostRequests: true,
    })),
],
}
