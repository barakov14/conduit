import {inject, Injectable, signal} from '@angular/core'
import {UserDTO} from '../../../shared/models/user.model'
import {Observable} from 'rxjs'
import {ApiService} from '../../http/api.service'

@Injectable({providedIn: 'root'})
export class AuthService {
  private readonly httpClient = inject(ApiService)

  user = signal<UserDTO | null>(null)


  getCurrentUser(): Observable<UserDTO> {
    return this.httpClient.get('/user')
  }


  setUserData(data: UserDTO) {
    this.user.set(data)
  }
}
