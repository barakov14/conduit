import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mc-tags-list',
  standalone: true,
  imports: [],
  templateUrl: './tags-list.component.html',
  styleUrl: './tags-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsListComponent {

}
