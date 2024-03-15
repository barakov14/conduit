import {ChangeDetectionStrategy, Component} from '@angular/core'
import {ProfileViewComponent} from '../profile-view/profile-view.component'

@Component({
  selector: 'profile-view-container',
  standalone: true,
  imports: [ProfileViewComponent],
  templateUrl: './profile-view-container.component.html',
  styleUrl: './profile-view-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileViewContainerComponent {}
