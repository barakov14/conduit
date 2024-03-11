import {ChangeDetectionStrategy, Component} from '@angular/core'
import {MatButton, MatIconButton} from '@angular/material/button'
import {MatIcon} from '@angular/material/icon'
import {MatToolbar} from '@angular/material/toolbar'
import {RouterLink} from '@angular/router'

@Component({
  selector: 'ui-footer',
  standalone: true,
  imports: [MatButton, MatIcon, MatIconButton, MatToolbar, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
