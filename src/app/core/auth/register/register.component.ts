import {ChangeDetectionStrategy, Component} from '@angular/core'
import {MatButton} from '@angular/material/button'
import {MatCard, MatCardContent} from '@angular/material/card'
import {MatFormField, MatLabel} from '@angular/material/form-field'
import {MatInput} from '@angular/material/input'
import {RouterLink} from '@angular/router'

@Component({
  selector: 'register',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatFormField,
    MatInput,
    MatLabel,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {}
