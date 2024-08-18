import {ChangeDetectionStrategy, Component, input} from '@angular/core'
import {DeepReadonlyObject} from '../../../../../core/utils/deep-readonly'
import {IArticle} from '../../../models/article.model'
import {DatePipe} from '@angular/common'

@Component({
  selector: 'mc-article-actions',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './article-actions.component.html',
  styleUrl: './article-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleActionsComponent {
  article = input.required<DeepReadonlyObject<IArticle>>()
}
