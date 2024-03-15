import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {LoginFormUiComponent} from '../login-form-ui/login-form-ui.component'
import {LoginUser} from '../../../api-types/auth'
import {Router} from '@angular/router'

@Component({
  selector: 'login-container',
  standalone: true,
  imports: [LoginFormUiComponent],
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent {
  private readonly router = inject(Router)

  onLogin(data: LoginUser) {}

  onRedirectToRegister() {
    this.router.navigate(['/register'])
  }
}
