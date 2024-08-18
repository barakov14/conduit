import {inject, Injectable, PLATFORM_ID} from '@angular/core'
import {isPlatformBrowser} from '@angular/common'

@Injectable({providedIn: 'root'})
export class LocalStorageJwtService {
  private readonly platformId = inject(PLATFORM_ID)

  saveToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken)
  }

  getToken() {
    if (isPlatformBrowser(this.platformId))
      return localStorage.getItem('jwtToken')
    return null
  }

  removeToken() {
    return localStorage.removeItem('jwtToken')
  }
}
