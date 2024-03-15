import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core'
import {MatToolbar} from '@angular/material/toolbar'
import {MatButton, MatIconButton} from '@angular/material/button'
import {MatIcon} from '@angular/material/icon'
import {RouterLink} from '@angular/router'
import {NgIf, NgOptimizedImage} from '@angular/common'
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu'
import {MatLabel} from '@angular/material/form-field'
import {ArticleCreateButtonComponent} from '../../../pages/article/article-create/article-create-button/article-create-button.component'

@Component({
  selector: 'ui-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon,
    RouterLink,
    MatButton,
    NgOptimizedImage,
    NgIf,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatLabel,
    ArticleCreateButtonComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  switchMode = output<void>()
  isDarkMode = input<boolean>()
  onSwitchMode() {
    this.switchMode.emit()
  }
}
