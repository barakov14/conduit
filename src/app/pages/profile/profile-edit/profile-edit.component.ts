import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
  selector: 'profile-edit',
  standalone: true,
  imports: [],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileEditComponent {}
