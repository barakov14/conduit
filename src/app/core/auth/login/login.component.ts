import {ChangeDetectionStrategy, Component} from '@angular/core'
import {MatFormField, MatInput, MatLabel} from '@angular/material/input'
import {MatButton} from '@angular/material/button'
import {MatCard, MatCardContent} from '@angular/material/card'
import {RouterLink} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    MatInput,
    MatFormField,
    MatLabel,
    MatButton,
    MatCard,
    MatCardContent,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {}
