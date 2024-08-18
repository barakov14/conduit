import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core'
import {AuthService} from '../../services/auth.service'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import {isPlatformBrowser} from '@angular/common'
import {exhaustMap, filter, fromEvent, of, tap} from 'rxjs'
import {RouterLink} from '@angular/router'
import {ILoginUser, INewUser} from '../../models/auth.model'
import {ErrorsComponent} from '../../../../shared/components/errors/errors.component'

@Component({
  selector: 'auth',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, ErrorsComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  private readonly authService = inject(AuthService)

  private submitButton =
    viewChild.required<ElementRef<HTMLButtonElement>>('submitButton')

  isLoginMode = signal<boolean>(true)

  authStatus = this.authService.selectAuthStatus
  errors = this.authService.selectError

  private readonly destroyRef = inject(DestroyRef)
  private readonly platformId = inject(PLATFORM_ID)

  authForm: FormGroup<{
    email: FormControl<string | null>
    password: FormControl<string | null>
    username?: FormControl<string | null>
  }>

  constructor() {
    this.authForm = new FormBuilder().group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    })

    if (isPlatformBrowser(this.platformId)) {
      effect(() => {
        // Проверяем какой режим и нету ли контрол с username в форме. если нету, то добавляем контрол, при обратном наоборот
        if (this.isLoginMode() && this.authForm.contains('username')) {
          this.authForm.removeControl('username')
        } else if (!this.isLoginMode() && !this.authForm.contains('username')) {
          this.authForm.addControl(
            'username',
            new FormControl('', [Validators.required, Validators.minLength(3)]),
          )
        }
      })
    }
  }

  changeMode() {
    this.authForm.reset()
    this.isLoginMode.update((mode) => !mode)
  }

  submit() {
    if (isPlatformBrowser(this.platformId)) {
      this.authService.authState.update((state) => ({
        ...state,
        authStatus: 'loading',
      }))

      const formData = this.authForm.getRawValue()

      const auth = this.isLoginMode()
        ? this.authService.login({user: formData} as ILoginUser)
        : this.authService.register({user: formData} as INewUser)

      auth.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () =>
          this.authService.authState.update((state) => ({
            ...state,
            authStatus: 'loaded',
          })),
        error: (err) =>
          this.authService.authState.update((state) => ({
            ...state,
            error: err.error,
            authStatus: 'error',
          })),
      })
    }
  }
}
