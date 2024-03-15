import {Routes} from '@angular/router'
import {authGuard} from '../../core/auth/data-access/services/auth.guard'

export const ProfileRoutes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./profile/profile-view-container/profile-view-container.component')
        .then((c) => c.ProfileViewContainerComponent)
  },
  {
    path: ':username',
    loadComponent: () =>
      import('./profile/profile-view-container/profile-view-container.component')
        .then((c) => c.ProfileViewContainerComponent)
  },
  {
    path: 'edit',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./profile-edit/profile-edit-container/profile-edit-container.component')
        .then((c) => c.ProfileEditContainerComponent)
  }
]
