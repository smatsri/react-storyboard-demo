import { useEffect, useState } from "react"
import { useTodoService } from "./Todo.context";
import { AddItemRequest, ITodoItem } from "./types";


export const useTodo = () => {
  const [items, setItems] = useState<ITodoItem[]>([]);
  const service = useTodoService();

  useEffect(() => {
    service.getItems().then(data => {
      setItems(data)
    });
  }, [])

  return {
    items,
    async add(req: AddItemRequest) {
      const res = await service.addItem(req)
      if (res.success) {
        const _items = await service.getItems()
        setItems(_items)
      }
    }
  }
}