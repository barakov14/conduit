import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'article-read-container',
  standalone: true,
  imports: [],
  templateUrl: './article-read-container.component.html',
  styleUrl: './article-read-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleReadContainerComponent {

}
