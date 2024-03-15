import {inject, Injectable} from '@angular/core'
import {ApiService} from '../../../core/http/api.service'
import {
  Article,
  ArticleComments,
  ArticlesList,
  CreateArticle,
  DeleteCommentFromArticle,
  PublishCommentBody,
  PublishCommentToArticle,
  Tags,
  UpdateArticle,
  UpdateArticleRequest,
} from '../../../core/api-types/article'
import {Observable} from 'rxjs'

@Injectable({providedIn: 'root'})
export class ArticleService {
  private readonly apiService = inject(ApiService)

  public loadTags(): Observable<Tags[]> {
    return this.apiService.get<Tags[]>('/tags')
  }

  public loadArticles(): Observable<ArticlesList> {
    return this.apiService.get<ArticlesList>('/articles')
  }

  public createArticle(data: CreateArticle): Observable<ArticlesList> {
    return this.apiService.post<ArticlesList, CreateArticle>('/articles', data)
  }

  public loadArticle(slug: string): Observable<Article> {
    return this.apiService.get<Article>(`/articles/${slug}`)
  }

  public updateArticle(req: UpdateArticle): Observable<Article> {
    return this.apiService.put<Article, UpdateArticleRequest>(
      `/articles/${req.slug}`,
      req.article,
    )
  }

  public deleteArticle(slug: string): Observable<void> {
    return this.apiService.delete<void>(`/articles/${slug}`)
  }

  public favoriteArticle(slug: string): Observable<Article> {
    return this.apiService.post<Article, void>(`/articles/${slug}/favorite`)
  }

  public unFavoriteArticle(slug: string): Observable<Article> {
    return this.apiService.delete<Article>(`/articles/${slug}/favorite`)
  }

  public getArticleComments(slug: string): Observable<ArticleComments> {
    return this.apiService.get<ArticleComments>(`/articles/${slug}/comments`)
  }

  public publishCommentToArticle(req: PublishCommentToArticle) {
    return this.apiService.post<Comment, PublishCommentBody>(
      `/articles/${req.slug}/comments`,
      req.comment,
    )
  }

  public deleteCommentFromArticle(req: DeleteCommentFromArticle) {
    return this.apiService.delete<void>(
      `/articles/${req.slug}/comments/${req.id}`,
    )
  }
}
