import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
  selector: 'article-create-button',
  standalone: true,
  imports: [],
  templateUrl: './article-create-button.component.html',
  styleUrl: './article-create-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCreateButtonComponent {}
