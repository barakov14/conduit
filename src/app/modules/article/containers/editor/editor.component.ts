import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, signal, viewChild} from '@angular/core'
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'
import {ArticleService} from '../../services/article.service'
import {Router} from '@angular/router'
import {ErrorsComponent} from '../../../../shared/components/errors/errors.component'

@Component({
  selector: 'editor',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ErrorsComponent
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorComponent {

  private readonly articleService = inject(ArticleService)
  private readonly router = inject(Router)

  readonly selectErrors = this.articleService.selectArticleErrors

  tagsInput = viewChild.required<ElementRef<HTMLInputElement>>('tagsInput')

  tags = signal<string[]>([])



  editorForm = new FormBuilder().group({
    title: new FormControl('', {}),
    description: new FormControl('', {}),
    body: new FormControl('', {}),
    tagList: new FormControl([] as string[])
  }) as FormGroup<{
    title: FormControl<string>,
    description: FormControl<string>,
    body: FormControl<string>,
    tagList: FormControl<string[]>
  }>


  addTag() {
    const tag = this.tagsInput().nativeElement.value
    this.tags.update((tags) => ([
      ...tags,
      tag
    ]))
    this.editorForm.get('tagList')?.patchValue(this.tags())
    this.tagsInput().nativeElement.value = ''
  }

  removeTag(tag: string) {
    this.tags.update((tags) => tags.filter((el) => el !== tag))
  }

  submit() {
    this.articleService.publishArticle({article: this.editorForm.getRawValue()}).subscribe({
      next: (res) => this.router.navigate(['/article', res.article.slug]),
      error: (err) => this.articleService.articleState.update((state) => ({
        ...state,
        error: err.error
      })),
    })
  }
}
