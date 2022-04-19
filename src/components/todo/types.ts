export type ITodoItem = {
  id: number
  title: string
  completed: boolean
}

export type AddItemRequest = {
  title: string
}