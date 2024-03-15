import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Output,
} from '@angular/core'
import {
  MatChipEditedEvent,
  MatChipGrid,
  MatChipInput,
  MatChipInputEvent,
  MatChipRow,
} from '@angular/material/chips'
import {MatFormField, MatLabel} from '@angular/material/form-field'
import {MatIcon} from '@angular/material/icon'
import {COMMA, ENTER} from '@angular/cdk/keycodes'
import {Tags} from '../../../core/api-types/article'
import {LiveAnnouncer} from '@angular/cdk/a11y'

@Component({
  selector: 'input-tags',
  standalone: true,
  imports: [
    MatChipGrid,
    MatChipInput,
    MatChipRow,
    MatFormField,
    MatIcon,
    MatLabel,
  ],
  templateUrl: './input-tags.component.html',
  styleUrl: './input-tags.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTagsComponent {
  addOnBlur = true
  readonly separatorKeysCodes: readonly number[] = [ENTER, COMMA]
  tags: Tags[] = []

  @Output() tagsChanged = new EventEmitter<Tags[]>()

  private readonly announcer = inject(LiveAnnouncer)

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim()
    if (value) {
      this.tags.push({name: value})
      this.tagsChangedEmit()
    }
    event.chipInput!.clear()
  }

  remove(tag: Tags): void {
    const index = this.tags.indexOf(tag)
    if (index !== -1) {
      this.tags.splice(index, 1)
      // Обратитесь к свойству через квадратные скобки
      this.announcer.announce(`Removed ${tag['name']}`)
      this.tagsChangedEmit()
    }
  }

  edit(tag: Tags, event: MatChipEditedEvent): void {
    const value = (event.value || '').trim()

    // Если значение пустое, удаляем тег
    if (!value) {
      this.remove(tag)
      return
    }

    // Редактируем значение тега
    tag['name'] = value
  }

  tagsChangedEmit() {
    this.tagsChanged.emit(this.tags)
  }
}
