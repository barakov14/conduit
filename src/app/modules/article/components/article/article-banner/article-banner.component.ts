import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mc-article-banner',
  standalone: true,
  imports: [],
  templateUrl: './article-banner.component.html',
  styleUrl: './article-banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleBannerComponent {

}
