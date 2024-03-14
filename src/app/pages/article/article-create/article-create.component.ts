import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {MatFormField, MatLabel} from '@angular/material/form-field'
import {
  MatChipEditedEvent,
  MatChipGrid,
  MatChipInput,
  MatChipInputEvent,
  MatChipRow,
} from '@angular/material/chips'
import {MatIcon} from '@angular/material/icon'
import {LiveAnnouncer} from '@angular/cdk/a11y'
import {COMMA, ENTER} from '@angular/cdk/keycodes'
import {MatInput} from '@angular/material/input'
import {MatButton} from '@angular/material/button'
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import {CreateArticle} from '../../../core/api-types/article'

@Component({
  selector: 'article-create',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatChipGrid,
    MatIcon,
    MatChipRow,
    MatChipInput,
    MatInput,
    MatButton,
    ReactiveFormsModule,
  ],
  templateUrl: './article-create.component.html',
  styleUrl: './article-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCreateComponent {
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

export interface Tags {
  [key: string]: string
}
