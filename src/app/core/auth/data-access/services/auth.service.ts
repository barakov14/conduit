import {inject, Injectable} from '@angular/core'
import {ApiService} from '../../../http/api.service'
import {LoginUser, NewUser} from '../../../api-types/auth'
import {Observable} from 'rxjs'
import {GetCurrentUser} from '../../../api-types/user'

@Injectable({providedIn: 'root'})
export class AuthService {
  private readonly apiService = inject(ApiService)

  public login(data: LoginUser): Observable<GetCurrentUser> {
    return this.apiService.post<GetCurrentUser, LoginUser>('/users/login', data)
  }

  public register(data: NewUser): Observable<GetCurrentUser> {
    return this.apiService.post<GetCurrentUser, NewUser>('/users', data)
  }

  public getCurrentUser(): Observable<GetCurrentUser> {
    return this.apiService.get<GetCurrentUser>('/user')
  }
}
