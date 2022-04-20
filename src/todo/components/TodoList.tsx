import TodoItem from "./TodoItem";
import { ITodoItem } from "../types";
import List from "../../components/ui/List";
import { ignore } from "../../utils/general";

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