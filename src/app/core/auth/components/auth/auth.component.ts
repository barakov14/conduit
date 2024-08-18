import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core'
import {AuthService} from '../../services/auth.service'
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop'
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import {isPlatformBrowser} from '@angular/common'
import {exhaustMap, filter, map, of, tap} from 'rxjs'
import {ActivatedRoute, Router, RouterLink} from '@angular/router'
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
  private readonly route = inject(ActivatedRoute)
  private readonly router = inject(Router)

  private mode = toSignal<string>(
    this.route.queryParams.pipe(map((param) => param['mode'])),
  )

  private readonly destroyRef = inject(DestroyRef)
  private readonly platformId = inject(PLATFORM_ID)

  authForm: FormGroup<{
    email: FormControl<string | null>,
    password: FormControl<string | null>,
    username?: FormControl<string | null>
  }>

  constructor() {

    this.router.navigate(['/auth'], {
      queryParams: {mode: 'login'},
    })

    this.authForm = new FormBuilder().group({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(6),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    })

    if (isPlatformBrowser(this.platformId)) {
      effect(() => {
        const mode = this.mode()

        if (mode === 'register') {
          this.authForm.addControl(
            'username',
            new FormControl('', [Validators.required, Validators.minLength(3)]),
          )
        } else if (mode === 'login') {
          this.authForm.removeControl('username')
        }
      })
    }
  }

  submit() {
    if (isPlatformBrowser(this.platformId)) {
      console.log('submit')
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
            this.mode() === 'register'
              ? this.authService.register(formData as INewUser)
              : this.authService.login(formData as ILoginUser),
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
