import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core'
import {ArticleStore} from '../data-access/article.store'
import {LetDirective} from '@ngrx/component'
import {ArticlesListCardComponent} from './articles-list-card/articles-list-card.component'
import {MatTabsModule} from '@angular/material/tabs'
@Component({
  selector: 'articles-list',
  standalone: true,
  imports: [LetDirective, ArticlesListCardComponent, MatTabsModule],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesListComponent implements OnInit {
  private articleStore = inject(ArticleStore)
  public readonly articlesList = this.articleStore.articlesList()
  public readonly status = this.articleStore.loadingStatus()
  public readonly errors = this.articleStore.error()

  public links = ['Your feed', 'Global feed']
  public activeLink = this.links[1]

  ngOnInit() {
    // this.articleStore.loadArticles('')
  }
}
