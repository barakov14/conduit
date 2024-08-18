import {computed, inject, Injectable, signal} from '@angular/core'
import {ArticleState} from '../models/article-state.model'
import {ApiService} from '../../../core/http/api.service'
import {ArticleDTO, ArticlesDTO} from '../models/article.model'

@Injectable({providedIn: 'root'})

export class ArticleService {

  private readonly httpClient = inject(ApiService)

  public readonly authState = signal<ArticleState>({
    articles: null,
    error: null
  })

  selectArticle = computed(() => this.authState().articles)
  selectArticleErrors = computed(() => this.authState().error)

  fetchArticles() {
    return this.httpClient.get<ArticlesDTO>('/articles')
  }

  fetchArticle(slug: string) {
    return this.httpClient.get<ArticleDTO>(`/article/${slug}`)
  }
}
