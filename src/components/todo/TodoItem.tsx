import { ITodoItem } from "./types";

interface TodoItemProps extends ITodoItem {
  setCompleted(value: boolean): void
}

const TodoItem = ({ title, completed, setCompleted }: TodoItemProps) => {
  return (
    <div className="item">
      <input 
        type="checkbox" 
        checked={completed} 
        onChange={e => setCompleted(e.target.checked)} 
      />
      <span>{title}</span>
    </div>
  );
}

export default TodoItem;