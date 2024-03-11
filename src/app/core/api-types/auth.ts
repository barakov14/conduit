export interface LoginUser {
  user: {
    email: string
    password: string
  }
}

export interface NewUser {
  user: {
    email: string
    username: string
    password: string
  }
}

export interface GetCurrentUser {
  user: {
    email: string
    token: string
    username: string
    bio: string
    image: string
  }
}
