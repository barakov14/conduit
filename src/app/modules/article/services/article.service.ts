import {computed, inject, Injectable, signal} from '@angular/core'
import {ArticleState} from '../models/article-state.model'
import {ApiService} from '../../../core/http/api.service'
import {ArticleDTO, ArticlesDTO} from '../models/article.model'

@Injectable({providedIn: 'root'})

export class ArticleService {

  private readonly httpClient = inject(ApiService)

  public readonly articleState = signal<ArticleState>({
    articles: null,
    article: null,
    error: null
  })

  selectArticles = computed(() => this.articleState().articles)
  selectArticle = computed(() => this.articleState().article)
  selectArticleErrors = computed(() => this.articleState().error)

  fetchArticles() {
    return this.httpClient.get<ArticlesDTO>('/articles')
  }

  fetchArticle(slug: string) {
    return this.httpClient.get<ArticleDTO>(`/articles/${slug}`)
  }
}
