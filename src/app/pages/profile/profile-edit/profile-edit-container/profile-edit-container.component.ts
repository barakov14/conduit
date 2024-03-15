import {ChangeDetectionStrategy, Component} from '@angular/core'
import {ProfileEditUiComponent} from '../profile-edit-ui/profile-edit-ui.component'
import {UpdateUser} from '../../../../core/api-types/user'

@Component({
  selector: 'profile-edit-container',
  standalone: true,
  imports: [ProfileEditUiComponent],
  templateUrl: './profile-edit-container.component.html',
  styleUrl: './profile-edit-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileEditContainerComponent {
  onUpdateCurrentUser(data: UpdateUser) {
    console.log(data)
  }
}
