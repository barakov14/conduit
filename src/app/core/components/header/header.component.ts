import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {RouterLink, RouterLinkActive} from '@angular/router'
import {UserAuthenticatedDirective} from '../../../shared/directives/user-authenticated.directive'
import {AuthService} from '../../auth/services/auth.service'

@Component({
  selector: 'mc-header',
  standalone: true,
  imports: [RouterLink, UserAuthenticatedDirective, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly currentUser = inject(AuthService).selectUser
}
