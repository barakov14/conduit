import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'article-comments',
  standalone: true,
  imports: [],
  templateUrl: './article-comments.component.html',
  styleUrl: './article-comments.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCommentsComponent {

}
