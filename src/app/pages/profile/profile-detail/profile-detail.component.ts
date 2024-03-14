import {ChangeDetectionStrategy, Component} from '@angular/core'
import {MatCard, MatCardActions, MatCardContent} from '@angular/material/card'
import {MatButton} from '@angular/material/button'
import {MatLabel} from '@angular/material/form-field'
import {MatIcon} from '@angular/material/icon'
import {MatTab, MatTabGroup} from '@angular/material/tabs'
import {RouterLink} from '@angular/router'

@Component({
  selector: 'profile-detail',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatLabel,
    MatIcon,
    MatTabGroup,
    MatTab,
    RouterLink,
  ],
  templateUrl: './profile-detail.component.html',
  styleUrl: './profile-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileDetailComponent {}
