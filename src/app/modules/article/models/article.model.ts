import {DeepReadonly} from '../../../core/utils/deep-readonly'
import {User} from '../../../shared/models/user.model'

export type ArticlesDTO = DeepReadonly<{
  articles: IArticle[];
  articlesCount: number;
}>


export interface IArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[]
  createdAt: Date;
  updatedAt: Date;
  favorited: boolean;
  favoritesCount: number;
  author: User
}

export type ArticleDTO = DeepReadonly<{
  article: IArticle
}>


export interface IPublishArticle {
  article: {
    title: string;
    description: string;
    body: string;
    tagList: string[]
  }
}
