import {ArticlesDTO} from './article.model'
import {ErrorModel} from '../../../shared/models/error.model'

export interface ArticleState {
  articles: ArticlesDTO | null | undefined;
  error: ErrorModel | null
}
