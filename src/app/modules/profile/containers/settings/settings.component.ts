import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent {

}
