import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {RegisterFormUiComponent} from '../register-form-ui/register-form-ui.component'
import {Router} from '@angular/router'
import {NewUser} from '../../../api-types/auth'

@Component({
  selector: 'register-container',
  standalone: true,
  imports: [RegisterFormUiComponent],
  templateUrl: './register-container.component.html',
  styleUrl: './register-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterContainerComponent {
  private readonly router = inject(Router)

  onRedirectToLogin() {
    this.router.navigate(['/login'])
  }

  onRegister(data: NewUser) {}
}
