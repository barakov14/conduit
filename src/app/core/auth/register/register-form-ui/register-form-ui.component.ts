import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Output,
} from '@angular/core'
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import {MatButton} from '@angular/material/button'
import {MatCard, MatCardContent} from '@angular/material/card'
import {MatFormField, MatLabel} from '@angular/material/form-field'
import {MatInput} from '@angular/material/input'
import {RouterLink} from '@angular/router'
import {NewUser} from '../../../api-types/auth'

@Component({
  selector: 'register-form-ui',
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
    RouterLink,
  ],
  templateUrl: './register-form-ui.component.html',
  styleUrl: './register-form-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormUiComponent {
  @Output() redirectToLogin = new EventEmitter<void>()
  @Output() register = new EventEmitter<NewUser>()

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
      this.register.emit(data)
    }
  }

  onRedirectToLogin() {
    this.redirectToLogin.emit()
  }
}
