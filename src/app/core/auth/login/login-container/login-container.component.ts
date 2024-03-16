import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {LoginFormUiComponent} from '../login-form-ui/login-form-ui.component'
import {LoginUser} from '../../../api-types/auth'
import {Router} from '@angular/router'
import {Store} from '@ngrx/store'
import {authActions} from '../../data-access/+state/auth.actions'

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
  private readonly store = inject(Store)

  onLogin(data: LoginUser) {
    this.store.dispatch(authActions.login({data}))
  }

  onRedirectToRegister() {
    this.router.navigate(['/register'])
  }
}
