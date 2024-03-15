import {ChangeDetectionStrategy, Component} from '@angular/core'
import {MatButton} from '@angular/material/button'
import {MatCard, MatCardActions, MatCardContent} from '@angular/material/card'
import {MatIcon} from '@angular/material/icon'
import {MatLabel} from '@angular/material/form-field'
import {MatTab, MatTabGroup} from '@angular/material/tabs'
import {RouterLink} from '@angular/router'

@Component({
  selector: 'profile-view',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatIcon,
    MatLabel,
    MatTab,
    MatTabGroup,
    RouterLink,
  ],
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileViewComponent {}
