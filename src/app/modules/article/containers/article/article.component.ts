import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from '@angular/core'
import {ArticleService} from '../../services/article.service'
import {ActivatedRoute} from '@angular/router'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {filter, map, switchMap, tap} from 'rxjs'
import {ArticleBannerComponent} from '../../components/article/article-banner/article-banner.component'
import {ArticleContentComponent} from '../../components/article/article-content/article-content.component'
import {ArticleActionsComponent} from '../../components/article/article-actions/article-actions.component'
import {CommentFormComponent} from '../../components/article/comments/comment-form/comment-form.component'
import {CommentsComponent} from '../../components/article/comments/comments.component'

@Component({
  selector: 'article',
  standalone: true,
  imports: [
    ArticleBannerComponent,
    ArticleContentComponent,
    ArticleActionsComponent,
    CommentFormComponent,
    CommentsComponent
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent implements OnInit {
  private readonly route = inject(ActivatedRoute)
  private readonly destroyRef = inject(DestroyRef)
  private readonly articleService = inject(ArticleService)

  readonly selectArticle = this.articleService.selectArticle

  ngOnInit() {
    this.route.params.pipe(
      map((param) => param['slug'] as string),
      filter((slug) => !!slug),
      switchMap((slug) => this.articleService.fetchArticle(slug)),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (article) => this.articleService.articleState.update(state => ({
        ...state,
        article
      })),
      error: (err) => this.articleService.articleState.update(state => ({
        ...state,
        error: err.errors
      }))
    })
  }
}
