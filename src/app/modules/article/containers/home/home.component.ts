import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from '@angular/core'
import {PaginationComponent} from '../../../../shared/components/pagination/pagination.component'
import {TagsListComponent} from '../../components/tags-list/tags-list.component'
import {ArticlePreviewComponent} from '../../components/article-preview/article-preview.component'
import {FeedToggleComponent} from '../../components/feed-toggle/feed-toggle.component'
import {ArticleService} from '../../services/article.service'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    PaginationComponent,
    TagsListComponent,
    ArticlePreviewComponent,
    FeedToggleComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit{
  private readonly articleService = inject(ArticleService)
  private readonly destroyRef = inject(DestroyRef)

  readonly selectArticles = this.articleService.selectArticles


  ngOnInit() {
    this.articleService.fetchArticles().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (articles) => this.articleService.authState.update((state) => ({
        ...state,
        articles
      })),
      error: (err) => this.articleService.authState.update((state) => ({
        ...state,
        error: err.errors
      }))
    })
  }
}
