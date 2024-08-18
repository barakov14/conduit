import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
  selector: 'article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {}
