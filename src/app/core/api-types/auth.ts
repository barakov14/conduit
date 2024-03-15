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
