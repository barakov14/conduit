import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core'
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import {MatButton} from '@angular/material/button'
import {
  MatChipEditedEvent,
  MatChipGrid,
  MatChipInput,
  MatChipInputEvent,
  MatChipRow,
} from '@angular/material/chips'
import {MatFormField, MatLabel} from '@angular/material/form-field'
import {MatIcon} from '@angular/material/icon'
import {MatInput} from '@angular/material/input'
import {COMMA, ENTER} from '@angular/cdk/keycodes'
import {LiveAnnouncer} from '@angular/cdk/a11y'
import {CreateArticle, Tags} from '../../../../core/api-types/article'
import {InputTagsComponent} from '../../../../shared/ui/input-tags/input-tags.component'
import {MatCard, MatCardContent} from '@angular/material/card'

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
    ReactiveFormsModule,
    InputTagsComponent,
    MatCard,
    MatCardContent,
  ],
  templateUrl: './article-create-ui.component.html',
  styleUrl: './article-create-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCreateUiComponent {
  @Output() createArticle = new EventEmitter<CreateArticle>()

  public formGroup = new FormBuilder().group({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
  })

  tags!: Tags[]

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
      this.createArticle.emit(data)
    }
  }

  onTagsChange(tags: Tags[]) {
    this.tags = tags
  }
}
