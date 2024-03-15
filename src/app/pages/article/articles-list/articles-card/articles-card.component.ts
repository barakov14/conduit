import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'articles-card',
  standalone: true,
  imports: [],
  templateUrl: './articles-card.component.html',
  styleUrl: './articles-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesCardComponent {

}
