import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
  selector: 'article-create-form',
  standalone: true,
  imports: [],
  templateUrl: './article-create-form.component.html',
  styleUrl: './article-create-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCreateFormComponent {}
