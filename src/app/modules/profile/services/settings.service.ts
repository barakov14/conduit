import {computed, inject, Injectable, signal} from '@angular/core'
import {ApiService} from '../../../core/http/api.service'
import {IUpdateCurrentUser} from '../models/settings.model'
import {UserCredentials} from '../../../shared/models/user.model'
import {AuthService} from '../../../core/auth/services/auth.service'
import {tap} from 'rxjs'
import {ErrorModel} from '../../../shared/models/error.model'

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private readonly httpClient = inject(ApiService)

  private readonly authService = inject(AuthService)

  public readonly settingsError = signal<ErrorModel | null>(null)

  selectSettingsError = computed(() => this.settingsError())

  updateCurrentUser(formData: IUpdateCurrentUser) {
    return this.httpClient.put<UserCredentials, IUpdateCurrentUser>('/user', formData).pipe(
      tap((user) =>
        {
          console.log(this.authService.selectUser())
          this.authService.authState.update((state) => ({
            ...state,
            user
          }))
        }
      )
    )
  }


}
