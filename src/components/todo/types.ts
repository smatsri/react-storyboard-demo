export type ITodoItem = {
  id: number
  title: string
  completed: boolean
}

export type AddItemRequest = {
  title: string
}

export type SetCompletedRequest = {
  id: number
  completed: boolean
}

export type SuccessResponse<T> = {
  success: true
  data: T
}

export type FailedResponse = {
  success: false
  error: string
}

export type ApiResponse<T> = SuccessResponse<T> | FailedResponse



export interface TodoService {
  getItems(): Promise<ITodoItem[]>
  addItem(req: AddItemRequest): Promise<ApiResponse<ITodoItem>>
  setCompleted(req: SetCompletedRequest): Promise<ApiResponse<any>>
}