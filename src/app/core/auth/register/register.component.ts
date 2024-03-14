import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {MatButton} from '@angular/material/button'
import {MatCard, MatCardContent} from '@angular/material/card'
import {MatFormField, MatLabel} from '@angular/material/form-field'
import {MatInput} from '@angular/material/input'
import {RouterLink} from '@angular/router'
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import {AuthStore} from '../data-access/auth.store'
import {LoginUser, NewUser} from '../../api-types/auth'

@Component({
  selector: 'register',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatFormField,
    MatInput,
    MatLabel,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  private readonly authStore = inject(AuthStore)
  public readonly loadingStatus = this.authStore.loadingStatus()
  public readonly errorMessage = this.authStore.error()

  public formGroup = new FormBuilder().group({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  onRegister() {
    if (this.formGroup.valid) {
      const data: NewUser = {
        user: {
          email: this.formGroup.value.email as string,
          username: this.formGroup.value.username as string,
          password: this.formGroup.value.password as string,
        },
      }
      this.authStore.register(data)
    }
  }
}
