import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'article-create-container',
  standalone: true,
  imports: [],
  templateUrl: './article-create-container.component.html',
  styleUrl: './article-create-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCreateContainerComponent {

}
