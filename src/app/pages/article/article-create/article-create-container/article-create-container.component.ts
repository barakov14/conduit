import {ChangeDetectionStrategy, Component} from '@angular/core'
import {ArticleCreateUiComponent} from '../article-create-ui/article-create-ui.component'
import {CreateArticle} from '../../../../core/api-types/article'

@Component({
  selector: 'article-create-container',
  standalone: true,
  imports: [ArticleCreateUiComponent],
  templateUrl: './article-create-container.component.html',
  styleUrl: './article-create-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCreateContainerComponent {
  onCreateArticle(data: CreateArticle) {
    console.log(data)
  }
}
