import { ComponentMeta, ComponentStory } from "@storybook/react";
import List from "./List"

type Control = (args: { items: string }) => any
type ListProps = typeof List & Control

const meta: ComponentMeta<ListProps> = {
  title: "UI/List",
  argTypes: {
    items: { control: "text" }
  }
}

export default meta;

const Template: ComponentStory<ListProps> =
  (args) => {
    const items = args.items ? args.items.split(';') : undefined
    return (
      <List {...args}>
        {items && items.map(s => (<div>{s}</div>))}
      </List>
    )
  };

export const Empty = Template.bind({})
Empty.args = {
  items: "1;2;3"
} 