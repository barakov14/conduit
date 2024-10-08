import {ChangeDetectionStrategy, Component, input} from '@angular/core'
import {DeepReadonlyObject} from '../../../../../core/utils/deep-readonly'
import {ArticleDTO, IArticle} from '../../../models/article.model'
import {DatePipe} from '@angular/common'

@Component({
  selector: 'mc-article-banner',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './article-banner.component.html',
  styleUrl: './article-banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleBannerComponent {
  article = input.required<DeepReadonlyObject<IArticle>>()
  followersCount = Math.floor(Math.random() * 1001)
  protected readonly Math = Math
}
