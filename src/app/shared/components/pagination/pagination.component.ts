import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mc-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {

}
