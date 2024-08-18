import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent {

}
