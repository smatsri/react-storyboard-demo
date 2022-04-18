import { ComponentMeta, ComponentStory } from "@storybook/react";
import TodoItem from "../../components/todo/TodoItem";

type Props = typeof TodoItem

const meta: ComponentMeta<Props> = {
  title: "TODO/TodoItem",
  argTypes: {
    setCompleted: { action: 'clicked' }
  }
}

export default meta;

const Template: ComponentStory<Props> =
  (args) => {
    return <TodoItem {...args} />
  };

export const Default = Template.bind({})
Default.args = {
  completed: false,
  title: "my first items"
}

export const Completed = Template.bind({})
Completed.args = {
  completed: true,
  title: "my first items"
}