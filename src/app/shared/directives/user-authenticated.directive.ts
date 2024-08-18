import {
  Directive,
  inject,
  Input,
  OnInit,
  signal,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core'
import {AuthService} from '../../core/auth/services/auth.service'
import {takeUntilDestroyed, toObservable} from '@angular/core/rxjs-interop'

@Directive({
  selector: '[userAuthenticated]',
  standalone: true,
})
export class UserAuthenticatedDirective<T> implements OnInit {
  private readonly templateRef = inject(TemplateRef<T>)
  private readonly authService = inject(AuthService)
  private readonly vcr = inject(ViewContainerRef)

  loggedIn$ = toObservable(this.authService.selectLoggedIn).pipe(
    takeUntilDestroyed(),
  )

  @Input() set userAuthenticated(condition: boolean) {
    this.condition.set(condition)
  }

  condition = signal<boolean>(false)
  hasView = signal<boolean>(false)

  ngOnInit() {
    this.loggedIn$.subscribe((loggedIn) => {
      const authRequired = loggedIn && this.condition() // Use this.condition() to read the value
      const unauthRequired = !loggedIn && !this.condition() // Same here

      if ((authRequired || unauthRequired) && !this.hasView()) {
        this.vcr.createEmbeddedView(this.templateRef)
        this.hasView.set(true)
      } else if (this.hasView()) {
        this.vcr.clear()
        this.hasView.set(false)
      }
    })
  }
}
