import {ChangeDetectionStrategy, Component, Input} from '@angular/core'
import {ErrorModel} from '../../models/error.model'

@Component({
  selector: 'mc-errors',
  standalone: true,
  imports: [],
  templateUrl: './errors.component.html',
  styleUrl: './errors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorsComponent {
  errorList: string[] = [];

  @Input({required: true}) set errors(errorList: ErrorModel | null) {
    this.errorList = errorList
      ? Object.keys(errorList.errors || {}).map(
        (key) => `${key} ${errorList.errors[key]}`,
      )
      : [];
  }
}
