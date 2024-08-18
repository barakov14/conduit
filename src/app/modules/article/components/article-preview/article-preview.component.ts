import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mc-article-preview',
  standalone: true,
  imports: [],
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlePreviewComponent {

}
