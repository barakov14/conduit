import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import {MatToolbar} from '@angular/material/toolbar'
import {MatButton, MatIconButton} from '@angular/material/button'
import {MatIcon} from '@angular/material/icon'
import {RouterLink} from '@angular/router'
import {NgIf, NgOptimizedImage} from '@angular/common'

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
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() switchMode = new EventEmitter<void>()
  @Input() isDarkMode!: boolean
  onSwitchMode() {
    this.switchMode.emit()
  }
}
