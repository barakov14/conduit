import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mc-article-content',
  standalone: true,
  imports: [],
  templateUrl: './article-content.component.html',
  styleUrl: './article-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleContentComponent {

}
