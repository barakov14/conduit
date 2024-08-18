import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mc-comment-form',
  standalone: true,
  imports: [],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentFormComponent {

}
