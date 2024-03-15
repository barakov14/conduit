import {ChangeDetectionStrategy, Component} from '@angular/core'
import {ArticlesCardComponent} from '../articles-card/articles-card.component'
import {FeedTabsComponent} from '../../../../shared/ui/feed-tabs/feed-tabs.component'

@Component({
  selector: 'articles-list',
  standalone: true,
  imports: [ArticlesCardComponent, FeedTabsComponent],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesListComponent {}
