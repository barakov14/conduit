import {ArticleDTO, ArticlesDTO} from './article.model'
import {ErrorModel} from '../../../shared/models/error.model'

export interface ArticleState {
  articles: ArticlesDTO | null | undefined;
  article: ArticleDTO | null | undefined;
  error: ErrorModel | null;
}
