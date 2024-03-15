export interface GetCurrentUser {
  user: {
    email: string
    token: string
    username: string
    bio: string
    image: string
  }
}

export interface UpdateUser {
  user: {
    email: string
    password: string
    username: string
    bio: string
    image: string
  }
}
