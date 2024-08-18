import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent {

}
