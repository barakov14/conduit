import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import {MatButton} from '@angular/material/button'
import {MatCard, MatCardContent} from '@angular/material/card'
import {MatFormField, MatLabel} from '@angular/material/form-field'
import {MatInput} from '@angular/material/input'
import {RouterLink} from '@angular/router'
import {AuthStore} from '../../data-access/auth.store'
import {LoginUser} from '../../../api-types/auth'

@Component({
  selector: 'login-form-ui',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatCard,
    MatCardContent,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login-form-ui.component.html',
  styleUrl: './login-form-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormUiComponent {
  private readonly authStore = inject(AuthStore)
  public readonly loadingStatus = this.authStore.loadingStatus()
  public readonly errorMessage = this.authStore.error()

  public formGroup = new FormBuilder().group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  onLogin() {
    if (this.formGroup.valid) {
      const data: LoginUser = {
        user: {
          email: this.formGroup.value.email as string,
          password: this.formGroup.value.password as string,
        },
      }
      this.authStore.login(data)
    }
  }
}