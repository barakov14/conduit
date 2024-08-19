import {ChangeDetectionStrategy, Component, DestroyRef, inject} from '@angular/core'
import {AuthService} from '../../../../core/auth/services/auth.service'
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {SettingsService} from '../../services/settings.service'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {ErrorsComponent} from '../../../../shared/components/errors/errors.component'

@Component({
  selector: 'settings',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ErrorsComponent
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent {
  private readonly settingsService = inject(SettingsService)
  private readonly destroyRef = inject(DestroyRef)
  private readonly selectUser = inject(AuthService).selectUser

  readonly selectSettingsError = this.settingsService.selectSettingsError

  settingsForm: FormGroup


  constructor() {
    const user = this.selectUser()?.user

    this.settingsForm = new FormBuilder().group({
      email: new FormControl(user?.email, [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.minLength(6),
      ]),
      username: new FormControl(user?.username, [Validators.minLength(6)]),
      bio: new FormControl(user?.bio),
      image: new FormControl(user?.image)
    })
  }

  submit() {
    this.settingsService.updateCurrentUser({user: this.settingsForm.getRawValue()}).pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      error: (err) => this.settingsService.settingsError.set(err.errors)
    })
  }
}
