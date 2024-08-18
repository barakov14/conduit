import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
  selector: 'editor',
  standalone: true,
  imports: [],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorComponent {}
