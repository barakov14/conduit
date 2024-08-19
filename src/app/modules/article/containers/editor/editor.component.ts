import {ChangeDetectionStrategy, Component} from '@angular/core'
import {EditorConfig, NgxSimpleTextEditorModule, ST_BUTTONS} from 'ngx-simple-text-editor'

@Component({
  selector: 'editor',
  standalone: true,
  imports: [
    NgxSimpleTextEditorModule
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorComponent {
}
