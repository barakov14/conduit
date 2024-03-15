import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
  selector: 'article-read',
  standalone: true,
  imports: [],
  templateUrl: './article-read.component.html',
  styleUrl: './article-read.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleReadComponent {}
