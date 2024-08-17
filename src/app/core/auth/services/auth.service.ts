import {inject, Injectable, signal} from '@angular/core'
import {UserDTO} from '../../../shared/models/user.model'
import {from, Observable, switchMap, tap} from 'rxjs'
import {ApiService} from '../../http/api.service'

@Injectable({providedIn: 'root'})
export class AuthService {
  private readonly httpClient = inject(ApiService)

  user = signal<UserDTO | null>(null)

  login(data: any) {}

  register(data: any) {}

  getCurrentUser(): Observable<UserDTO> {
    return this.httpClient.get<UserDTO>('/user').pipe(
      tap({
        next: (res) => {
          this.setUserData(res)
        },
        error: () => {
          console.log('error')
        }
      }))
  }


  setUserData(data: UserDTO) {
    this.user.set(data)
  }
}
