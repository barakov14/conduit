import {ChangeDetectionStrategy, Component} from '@angular/core'
import {ArticleCommentComponent} from './article-comment/article-comment.component'

@Component({
  selector: 'article-comments',
  standalone: true,
  imports: [
    ArticleCommentComponent
  ],
  templateUrl: './article-comments.component.html',
  styleUrl: './article-comments.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCommentsComponent {}
