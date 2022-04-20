import TodoItem from "./TodoItem";
import { ITodoItem } from "../types";
import { ignore } from "../../utils/general";
import List from "../../demo-1/components/ui/List";

type TodoListProps = {
  items: ITodoItem[]
  setCompleted?(id: number, value: boolean): void
}

const TodoList = ({ items, setCompleted = ignore }: TodoListProps) => {
  
  return (
    <List>
      {items.map(item => (
        <TodoItem
          {...item}
          setCompleted={value => setCompleted(item.id, value)} />
      ))}
    </List>
  );
}

export default TodoList;