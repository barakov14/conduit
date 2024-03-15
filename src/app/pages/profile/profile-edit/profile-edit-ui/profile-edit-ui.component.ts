import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import {MatButton, MatIconButton} from '@angular/material/button'
import {MatCard, MatCardContent} from '@angular/material/card'
import {MatFormField, MatLabel} from '@angular/material/form-field'
import {MatIcon} from '@angular/material/icon'
import {MatInput} from '@angular/material/input'
import {NgClass} from '@angular/common'

@Component({
  selector: 'profile-edit-ui',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatCard,
    MatCardContent,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './profile-edit-ui.component.html',
  styleUrl: './profile-edit-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileEditUiComponent {
  isPhotoHovered = false
  private avatarUrl!: string

  public formGroup = new FormBuilder().group({
    link: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    bio: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  onUpdate() {}

  clickPhoto() {
    this.isPhotoHovered = !this.isPhotoHovered
  }

  openFileUploader() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement
    fileInput.click()
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0]
    // Здесь вы можете выполнить дальнейшие действия с выбранным файлом, например, загрузить его на сервер или отобразить его на странице
    if (file) {
      const reader = new FileReader()
      reader.onload = (e: any) => {
        this.avatarUrl = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
}