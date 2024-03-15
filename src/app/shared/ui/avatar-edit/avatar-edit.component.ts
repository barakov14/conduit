import {ChangeDetectionStrategy, Component} from '@angular/core'
import {MatIcon} from '@angular/material/icon'
import {MatIconButton} from '@angular/material/button'
import {NgClass} from '@angular/common'

@Component({
  selector: 'avatar-edit',
  standalone: true,
  imports: [MatIcon, MatIconButton, NgClass],
  templateUrl: './avatar-edit.component.html',
  styleUrl: './avatar-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarEditComponent {
  isPhotoHovered = false
  private avatarUrl!: string
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
