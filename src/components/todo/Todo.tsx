import AddForm from "./AddForm";
import { useTodo } from "./Todo.hook";
import TodoList from "./TodoList";

type TodoProps = {}

const Todo = ({ }: TodoProps) => {
  const { items, add } = useTodo()
  return (
    <div className="todo">
      <AddForm onSubmit={add} />
      <TodoList items={items} />
    </div>
  );
}

export default Todo;