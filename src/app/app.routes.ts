import {Routes} from '@angular/router'

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./core/auth/components/auth/auth.component').then(
        (c) => c.AuthComponent,
      ),
  },
  {
    path: 'profile/:username',
    loadComponent: () =>
      import('./modules/profile/containers/user-profile/user-profile.component')
        .then(c => c.UserProfileComponent)
  },
  {
    path: '',
    loadComponent: () =>
      import('./modules/article/containers/home/home.component').then(
        (c) => c.HomeComponent,
      ),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./modules/profile/containers/settings/settings.component')
        .then(c => c.SettingsComponent)
  },
  {
    path: 'article/:slug',
    loadComponent: () =>
      import('./modules/article/containers/article/article.component')
        .then(c => c.ArticleComponent)
  },
  {
    path: 'edit',
    loadComponent: () =>
      import('./modules/article/containers/editor/editor.component').then(
        (c) => c.EditorComponent,
      ),
  },
]
