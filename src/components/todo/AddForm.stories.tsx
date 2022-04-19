import { ComponentMeta, ComponentStory } from "@storybook/react";
import AddForm from "./AddForm"

type AddFormProps = typeof AddForm
const meta: ComponentMeta<AddFormProps> = {
  title: "TODO/AddForm",
  argTypes: {
    onSubmit: { action: "onSubmit" }
  }
}

export default meta;

const Template: ComponentStory<AddFormProps> =
  (args) => {
    return <AddForm {...args} />
  };

export const Default = Template.bind({})