import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core'
import {DeepReadonlyObject} from '../../../../../core/utils/deep-readonly'
import {IArticle} from '../../../models/article.model'
import {DomSanitizer, SafeHtml} from '@angular/platform-browser'

@Component({
  selector: 'mc-article-content',
  standalone: true,
  imports: [],
  templateUrl: './article-content.component.html',
  styleUrl: './article-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleContentComponent {
  article = input.required<DeepReadonlyObject<IArticle>>()
}
