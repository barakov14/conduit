import {User} from './profile'

export interface ArticlesList {
  articles: Article[]
  articlesCount: number
}

export interface Article {
  slug: string
  title: string
  description: string
  body: string
  tagList: string[]
  createdAt: Date
  updatedAt: Date
  favorited: boolean
  favoritesCount: number
  author: User
}

export interface UpdateArticle {
  article: UpdateArticleRequest
  slug: string
}

export interface UpdateArticleRequest {
  title: string
  description: string
  body: string
}

export interface CreateArticle {
  article: {
    title: string
    description: string
    body: string
    tagList: string[]
  }
}

export interface TagList {
  tags: string[]
}

export interface ArticleComments {
  comments: Comment[]
}

export interface Comment {
  id: number
  createdAt: Date
  updatedAt: Date
  body: string
  author: User
}

export interface PublishCommentToArticle {
  comment: PublishCommentBody
  slug: string
}

export interface PublishCommentBody {
  body: string
}

export interface DeleteCommentFromArticle {
  slug: string
  id: number
}

export interface Tags {
  [key: string]: string
}
