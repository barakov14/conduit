import {computed, inject, Injectable, signal} from '@angular/core'
import {ArticleState} from '../models/article-state.model'
import {ApiService} from '../../../core/http/api.service'
import {ArticleDTO, ArticlesDTO, IPublishArticle} from '../models/article.model'
import {DeepReadonlyObject} from '../../../core/utils/deep-readonly'

@Injectable({providedIn: 'root'})

export class ArticleService {

  private readonly httpClient = inject(ApiService)

  public readonly articleState = signal<ArticleState>({
    articles: null,
    article: null,
    tags: null,
    error: null
  })

  selectArticles = computed(() => this.articleState().articles)
  selectArticle = computed(() => this.articleState().article)
  selectTags = computed(() => this.articleState().tags)
  selectArticleErrors = computed(() => this.articleState().error)

  fetchArticles() {
    return this.httpClient.get<ArticlesDTO>('/articles')
  }

  fetchArticle(slug: string) {
    return this.httpClient.get<ArticleDTO>(`/articles/${slug}`)
  }

  fetchPopularTags() {
    return this.httpClient.get<DeepReadonlyObject<{tags: string[]}>>('/tags')
  }

  publishArticle(formData: IPublishArticle) {
    return this.httpClient.post<ArticleDTO, IPublishArticle>('/articles', formData)
  }
}
