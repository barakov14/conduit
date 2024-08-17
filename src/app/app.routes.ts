import {Routes} from '@angular/router'

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./core/auth/components/auth/auth.component').then(
        (c) => c.AuthComponent,
      ),
  },
]
