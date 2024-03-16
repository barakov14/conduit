import {ChangeDetectionStrategy, Component} from '@angular/core'
import {ArticleCommentsComponent} from '../article-comments/article-comments.component'

@Component({
  selector: 'article-read',
  standalone: true,
  imports: [
    ArticleCommentsComponent
  ],
  templateUrl: './article-read.component.html',
  styleUrl: './article-read.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleReadComponent {}
