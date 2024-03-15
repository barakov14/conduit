import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'profile-view-container',
  standalone: true,
  imports: [],
  templateUrl: './profile-view-container.component.html',
  styleUrl: './profile-view-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileViewContainerComponent {

}
