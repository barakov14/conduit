import {Routes} from '@angular/router'
import {authGuard} from '../../core/auth/data-access/services/auth.guard'

export const ArticleRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./articles-list/articles-list-container/articles-list-container.component')
        .then((c) => c.ArticlesListContainerComponent)
  },
  {
    path: ':page',
    loadComponent: () =>
      import('./articles-list/articles-list-container/articles-list-container.component')
        .then((c) => c.ArticlesListContainerComponent)
  },
  {
    path: 'feed/:page',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./articles-list/articles-list-container/articles-list-container.component')
        .then((c) => c.ArticlesListContainerComponent)
  },
  {
    path: ':tag/:page',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./articles-list/articles-list-container/articles-list-container.component')
        .then((c) => c.ArticlesListContainerComponent)
  },
  {
    path: 'article/:slug',
    loadComponent: () =>
      import('./article-read/article-read-container/article-read-container.component')
        .then((c) => c.ArticleReadContainerComponent)
  },
  {
    path: 'article/create',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./article-create/article-create-container/article-create-container.component')
        .then((c) => c.ArticleCreateContainerComponent)
  }
]
