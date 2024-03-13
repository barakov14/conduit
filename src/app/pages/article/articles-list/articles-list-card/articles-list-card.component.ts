import {ChangeDetectionStrategy, Component, Input} from '@angular/core'
import {Article} from '../../../../core/api-types/article'

@Component({
  selector: 'articles-list-card',
  standalone: true,
  imports: [],
  templateUrl: './articles-list-card.component.html',
  styleUrl: './articles-list-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesListCardComponent {
  @Input() article!: Article
}
