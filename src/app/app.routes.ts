import {Routes} from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./core/auth/register/register.component').then(
        (c) => c.RegisterComponent,
      ),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/profile/profile-edit/profile-edit.component').then(
        (c) => c.ProfileEditComponent,
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./core/auth/login/login.component').then((c) => c.LoginComponent),
  },
]
