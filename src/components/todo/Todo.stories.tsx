import { ComponentMeta, ComponentStory } from "@storybook/react";
import Todo from "./Todo"
import { TodoContext } from "./Todo.context";
import { mockTodoService } from "./Todo.service";


type TodoProps = typeof Todo
const meta: ComponentMeta<TodoProps> = {
  title: "Todo/Todo"
}

export default meta;

const Template: ComponentStory<TodoProps> =
  (args) => {
    return (
      <TodoContext.Provider value={mockTodoService()}>
        <Todo {...args} />
      </TodoContext.Provider>)
  };

export const Default = Template.bind({})