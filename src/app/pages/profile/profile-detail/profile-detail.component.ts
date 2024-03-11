import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
  selector: 'profile-detail',
  standalone: true,
  imports: [],
  templateUrl: './profile-detail.component.html',
  styleUrl: './profile-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileDetailComponent {}
