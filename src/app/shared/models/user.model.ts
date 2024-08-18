import {DeepReadonly} from '../../core/utils/deep-readonly'

export type UserCredentials = DeepReadonly<{
  user: {
    email: string
    token: string
    username: string
    bio: string
    image: string
  }
}>

export type User = DeepReadonly<{
  username: string;
  bio: string;
  image: string;
  following: boolean;
}>
