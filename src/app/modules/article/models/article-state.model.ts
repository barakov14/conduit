import {ArticleDTO, ArticlesDTO} from './article.model'
import {ErrorModel} from '../../../shared/models/error.model'
import {DeepReadonlyObject} from '../../../core/utils/deep-readonly'

export interface ArticleState {
  articles: ArticlesDTO | null | undefined;
  article: ArticleDTO | null | undefined;
  tags: DeepReadonlyObject<{tags: string[]}> | null | undefined
  error: ErrorModel | null;
}
