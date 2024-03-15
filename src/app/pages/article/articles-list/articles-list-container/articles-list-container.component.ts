import {ChangeDetectionStrategy, Component} from '@angular/core'
import {ArticlesListComponent} from '../articles-list/articles-list.component'

@Component({
  selector: 'articles-list-container',
  standalone: true,
  imports: [ArticlesListComponent],
  templateUrl: './articles-list-container.component.html',
  styleUrl: './articles-list-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesListContainerComponent {}
