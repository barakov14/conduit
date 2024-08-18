import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  inject,
  PLATFORM_ID,
  signal,
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
import {exhaustMap, filter, of, tap} from 'rxjs'
import {RouterLink} from '@angular/router'
import {ILoginUser, INewUser} from '../../models/auth.model'

@Component({
  selector: 'auth',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  private readonly authService = inject(AuthService)

  isLoginMode = signal<boolean>(true)

  private readonly destroyRef = inject(DestroyRef)
  private readonly platformId = inject(PLATFORM_ID)

  authForm: FormGroup<{
    email: FormControl<string | null>
    password: FormControl<string | null>
    username?: FormControl<string | null>
  }>

  constructor() {
    this.authForm = new FormBuilder().group({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
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
      of(this.authForm.getRawValue())
        .pipe(
          tap(() =>
            this.authService.authState.update((state) => ({
              ...state,
              authStatus: 'loading',
            })),
          ),
          takeUntilDestroyed(this.destroyRef),
          filter(() => this.authForm.valid),
          exhaustMap((formData) =>
              this.isLoginMode()
                ? this.authService.login({'user': formData} as ILoginUser)
                : this.authService.register({'user': formData} as INewUser)
          ),
        )
        .subscribe({
          next: (userData) =>
            this.authService.authState.update((state) => ({
              ...state,
              user: userData,
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
