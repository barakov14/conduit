import {Injectable} from '@angular/core'

@Injectable({providedIn: 'root'})

export class LocalStorageJwtService {
  saveToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken)
  }

  getToken() {
    return localStorage.getItem('jwtToken')
  }

  removeToken() {
    return localStorage.removeItem('jwtToken')
  }
}
