import {Routes} from '@angular/router'
import {authGuard} from './core/auth/data-access/services/auth.guard'
import {HomeComponent} from './pages/home/home.component'

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: HomeComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () =>
          import('./pages/profile/profile.routes')
            .then((r) => r.ProfileRoutes)
      },
      {
        path: '',
        loadChildren: () =>
          import('./pages/article/article.routes')
            .then((r) => r.ArticleRoutes)
      }
    ]
  },
  {
    path: 'register',
    loadComponent: () =>
      import(
        './core/auth/register/register-container/register-container.component'
      ).then((c) => c.RegisterContainerComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import(
        './core/auth/login/login-container/login-container.component'
      ).then((c) => c.LoginContainerComponent),
  },
]
