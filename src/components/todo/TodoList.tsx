import List from "../ui/List";
import TodoItem from "./TodoItem";
import { ignore } from "../../utils/general";
import { ITodoItem } from "./types";

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