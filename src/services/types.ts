export type LoginRequest = {
  username: string
  password: string
}

type Successefull = {
  success: true
  user: User
}

type Failed = {
  success: false
  error: string
}

export type LoginResponse = Successefull | Failed


export type User = {
  username: string
}

export interface IApiService {
  login(req: LoginRequest): Promise<LoginResponse>
}