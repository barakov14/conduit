import {DeepReadonly} from '../../core/utils/deep-readonly'

export type UserDTO = DeepReadonly<{
  user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
  }
}>


