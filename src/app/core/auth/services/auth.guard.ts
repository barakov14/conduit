import {LocalStorageJwtService} from './local-storage-jwt.service'
import {inject} from '@angular/core'
import {Router} from '@angular/router'

export const authGuard = () => {
  const router = inject(Router)
  const storage = inject(LocalStorageJwtService)

  if (!storage.getToken()) {
    router.navigate(['/'])
    return false
  }
  return true
}
