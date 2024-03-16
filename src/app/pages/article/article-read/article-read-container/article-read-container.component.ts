import {ChangeDetectionStrategy, Component} from '@angular/core'
import {ArticleReadComponent} from '../article-read/article-read.component'

@Component({
  selector: 'article-read-container',
  standalone: true,
  imports: [
    ArticleReadComponent
  ],
  templateUrl: './article-read-container.component.html',
  styleUrl: './article-read-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleReadContainerComponent {}
