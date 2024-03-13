import {ChangeDetectionStrategy, Component} from '@angular/core'
import {ArticlesListComponent} from '../article/articles-list/articles-list.component'

@Component({
  selector: 'home',
  standalone: true,
  imports: [ArticlesListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
