import {ChangeDetectionStrategy, Component, input} from '@angular/core'
import {IArticle} from '../../models/article.model'
import {DatePipe} from '@angular/common'
import {DeepReadonlyObject} from '../../../../core/utils/deep-readonly'
import {RouterLink} from '@angular/router'

@Component({
  selector: 'mc-article-preview',
  standalone: true,
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlePreviewComponent {
  article = input.required<DeepReadonlyObject<IArticle>>()
}
