import {patchState, signalStore, withMethods, withState} from '@ngrx/signals'
import {initialArticleState} from './article.model'
import {inject} from '@angular/core'
import {ArticleService} from './article.service'
import {rxMethod} from '@ngrx/signals/rxjs-interop'
import {pipe, switchMap, tap} from 'rxjs'
import {tapResponse} from '@ngrx/component-store'
import {Errors} from '../../../core/api-types/error'
import {
  Article,
  ArticlesList,
  CreateArticle,
  DeleteCommentFromArticle,
  PublishCommentToArticle,
  UpdateArticle,
} from '../../../core/api-types/article'

export const ArticleStore = signalStore(
  {providedIn: 'root'},
  withState(initialArticleState),
  withMethods((store, articleService = inject(ArticleService)) => ({
    /*    loadTags: rxMethod<void>(
      pipe(
        switchMap(() =>)
      )
    ),*/
    loadArticles: rxMethod<void>(
      pipe(
        tap(() => patchState(store, {loadingStatus: 'loading'})),
        switchMap(() => {
          return articleService.loadArticles().pipe(
            tapResponse({
              next: (articlesList: ArticlesList) => {
                patchState(store, {articlesList, loadingStatus: 'loaded'}),
                  console.log(articlesList)
              },
              error: (error: Errors) =>
                patchState(store, {error, loadingStatus: 'error'}),
            }),
          )
        }),
      ),
    ),
    loadArticle: rxMethod<string>(
      pipe(
        tap(() => patchState(store, {loadingStatus: 'loading'})),
        switchMap((slug) => {
          return articleService.loadArticle(slug).pipe(
            tapResponse({
              next: (article: Article) =>
                patchState(store, {article, loadingStatus: 'loaded'}),
              error: (error: Errors) =>
                patchState(store, {error, loadingStatus: 'error'}),
            }),
          )
        }),
      ),
    ),
    createArticle: rxMethod<CreateArticle>(
      pipe(
        tap(() => patchState(store, {loadingStatus: 'loading'})),
        switchMap((data) => {
          return articleService.createArticle(data).pipe(
            tapResponse({
              next: (articlesList) =>
                patchState(store, {articlesList, loadingStatus: 'loaded'}),
              error: (error: Errors) =>
                patchState(store, {error, loadingStatus: 'error'}),
            }),
          )
        }),
      ),
    ),
    updateArticle: rxMethod<UpdateArticle>(
      pipe(
        tap(() => patchState(store, {loadingStatus: 'loading'})),
        switchMap((data) => {
          return articleService.updateArticle(data).pipe(
            tapResponse({
              next: (article) =>
                patchState(store, {article, loadingStatus: 'loaded'}),
              error: (error: Errors) =>
                patchState(store, {error, loadingStatus: 'error'}),
            }),
          )
        }),
      ),
    ),
    deleteArticle: rxMethod<string>(
      pipe(
        tap(() => patchState(store, {loadingStatus: 'loading'})),
        switchMap((slug) => {
          return articleService.deleteArticle(slug).pipe(
            tapResponse({
              next: () => patchState(store, {loadingStatus: 'loaded'}),
              error: (error: Errors) =>
                patchState(store, {error, loadingStatus: 'error'}),
            }),
          )
        }),
      ),
    ),
    favoriteArticle: rxMethod<string>(
      pipe(
        tap(() => patchState(store, {loadingStatus: 'loading'})),
        switchMap((slug) => {
          return articleService.favoriteArticle(slug).pipe(
            tapResponse({
              next: (article) =>
                patchState(store, {article, loadingStatus: 'loaded'}),
              error: (error: Errors) =>
                patchState(store, {error, loadingStatus: 'error'}),
            }),
          )
        }),
      ),
    ),
    unFavoriteArticle: rxMethod<string>(
      pipe(
        tap(() => patchState(store, {loadingStatus: 'loading'})),
        switchMap((slug) => {
          return articleService.unFavoriteArticle(slug).pipe(
            tapResponse({
              next: (article) =>
                patchState(store, {article, loadingStatus: 'loaded'}),
              error: (error: Errors) =>
                patchState(store, {error, loadingStatus: 'error'}),
            }),
          )
        }),
      ),
    ),
    getArticleComments: rxMethod<string>(
      pipe(
        tap(() => patchState(store, {loadingStatus: 'loading'})),
        switchMap((slug) => {
          return articleService.getArticleComments(slug).pipe(
            tapResponse({
              next: (articleComments) =>
                patchState(store, {articleComments, loadingStatus: 'loaded'}),
              error: (error: Errors) =>
                patchState(store, {error, loadingStatus: 'error'}),
            }),
          )
        }),
      ),
    ),
    publishCommentToArticle: rxMethod<PublishCommentToArticle>(
      pipe(
        tap(() => patchState(store, {loadingStatus: 'loading'})),
        switchMap((req) => {
          return articleService.publishCommentToArticle(req).pipe(
            tapResponse({
              next: () => patchState(store, {loadingStatus: 'loaded'}),
              error: (error: Errors) =>
                patchState(store, {error, loadingStatus: 'error'}),
            }),
          )
        }),
      ),
    ),
    deleteCommentFromArticle: rxMethod<DeleteCommentFromArticle>(
      pipe(
        tap(() => patchState(store, {loadingStatus: 'loading'})),
        switchMap((req) => {
          return articleService.deleteCommentFromArticle(req).pipe(
            tapResponse({
              next: () => patchState(store, {loadingStatus: 'loaded'}),
              error: (error: Errors) =>
                patchState(store, {error, loadingStatus: 'error'}),
            }),
          )
        }),
      ),
    ),
  })),
)
