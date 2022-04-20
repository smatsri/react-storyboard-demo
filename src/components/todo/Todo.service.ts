import { AddItemRequest, ApiResponse, ITodoItem, SetCompletedRequest, TodoService } from "./types"

export const mockTodoService = (): TodoService => {

  let testItems: ITodoItem[] = [
    { id: 1, completed: true, title: "first" },
    { id: 2, completed: true, title: "second" },
    { id: 3, completed: false, title: "last" }
  ]

  return {
    getItems: function (): Promise<ITodoItem[]> {
      return Promise.resolve([...testItems]);
    },
    addItem: function (req: AddItemRequest): Promise<ApiResponse<ITodoItem>> {
      const newItem = {
        id: 4,
        completed: false,
        title: req.title
      };
      testItems.unshift(newItem)
      return Promise.resolve({
        success: true,
        data: newItem
      });
    },
    setCompleted: function (req: SetCompletedRequest): Promise<ApiResponse<any>> {
      throw new Error("Function not implemented.");
    }
  }
}