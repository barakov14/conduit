export interface UserProfile {
  profile: User
}

export interface User {
  username: string
  bio: string
  image: string
  following: boolean
}
