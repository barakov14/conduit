import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
  selector: 'article-comment',
  standalone: true,
  imports: [],
  templateUrl: './article-comment.component.html',
  styleUrl: './article-comment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCommentComponent {}
