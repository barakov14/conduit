import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'articles-list-container',
  standalone: true,
  imports: [],
  templateUrl: './articles-list-container.component.html',
  styleUrl: './articles-list-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesListContainerComponent {

}
