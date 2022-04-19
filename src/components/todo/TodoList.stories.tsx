import { ComponentMeta, ComponentStory } from "@storybook/react";
import TodoList from "./TodoList"

type TodoListProps = typeof TodoList
const meta: ComponentMeta<TodoListProps> = {
  title: "TODO/TodoList",
  argTypes: {
    setCompleted: { action: "setCompleted" }
  }
}

export default meta;

const TestData = {
  items: [
    { id: 1, completed: true, title: "my first task" },
    { id: 2, completed: false, title: "my second task" },
    { id: 3, completed: false, title: "my final task" },
  ]
}

const Template: ComponentStory<TodoListProps> =
  (args) => {
    return <TodoList {...args} />
  };

export const Default = Template.bind({})
Default.args = {
  items: TestData.items
}