import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {MatFormField, MatInput, MatLabel} from '@angular/material/input'
import {MatButton} from '@angular/material/button'
import {MatCard, MatCardContent} from '@angular/material/card'
import {RouterLink} from '@angular/router'
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import {AuthStore} from '../data-access/auth.store'
import {LoginUser} from '../../api-types/auth'

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    MatInput,
    MatFormField,
    MatLabel,
    MatButton,
    MatCard,
    MatCardContent,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
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
