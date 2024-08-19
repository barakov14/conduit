import {ChangeDetectionStrategy, Component, input} from '@angular/core'
import {DeepReadonlyObject} from '../../../../core/utils/deep-readonly'
import {RouterLink} from '@angular/router'

@Component({
  selector: 'mc-tags-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './tags-list.component.html',
  styleUrl: './tags-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsListComponent {
  tags = input.required<DeepReadonlyObject<string[]>>()
}
