import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import {MatButton} from '@angular/material/button'
import {MatChipEditedEvent, MatChipGrid, MatChipInput, MatChipInputEvent, MatChipRow} from '@angular/material/chips'
import {MatFormField, MatLabel} from '@angular/material/form-field'
import {MatIcon} from '@angular/material/icon'
import {MatInput} from '@angular/material/input'
import {COMMA, ENTER} from '@angular/cdk/keycodes'
import {LiveAnnouncer} from '@angular/cdk/a11y'
import {CreateArticle, Tags} from '../../../../core/api-types/article'

@Component({
  selector: 'article-create-ui',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatChipGrid,
    MatChipInput,
    MatChipRow,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './article-create-ui.component.html',
  styleUrl: './article-create-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCreateUiComponent {
  addOnBlur = true
  readonly separatorKeysCodes: readonly number[] = [ENTER, COMMA]
  tags: Tags[] = []

  private readonly announcer = inject(LiveAnnouncer)

  public formGroup = new FormBuilder().group({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
  })

  onSubmit(): void {
    if (this.formGroup.valid) {
      const data: CreateArticle = {
        article: {
          title: this.formGroup.value.title as string,
          description: this.formGroup.value.description as string,
          body: this.formGroup.value.body as string,
          tagList: this.tags.map((tag) => tag['name']),
        },
      }
      console.log(data)
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim()
    if (value) {
      this.tags.push({name: value})
    }
    event.chipInput!.clear()
  }

  remove(tag: Tags): void {
    const index = this.tags.indexOf(tag)
    if (index !== -1) {
      this.tags.splice(index, 1)
      // Обратитесь к свойству через квадратные скобки
      this.announcer.announce(`Removed ${tag['name']}`)
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
}
