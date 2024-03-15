import {ChangeDetectionStrategy, Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {HeaderComponent} from './shared/ui/header/header.component'
import {FooterComponent} from './shared/ui/footer/footer.component'
import {MatSidenav, MatSidenavContainer} from '@angular/material/sidenav'
import {NgClass} from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MatSidenavContainer,
    NgClass,
    MatSidenav,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'conduit'
  isDarkMode = true

  onSwitchMode() {
    this.isDarkMode = !this.isDarkMode
  }
}
