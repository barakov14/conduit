import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
  selector: 'articles-list',
  standalone: true,
  imports: [],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesListComponent {}
