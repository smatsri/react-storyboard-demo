import { ComponentMeta, ComponentStory } from "@storybook/react";

import Input from "../../../components/ui/form/Input"

type InputType = typeof Input

export default {
  title: "UI/form/Input",
  component: Input
} as ComponentMeta<InputType>

const Template: ComponentStory<InputType> = (props) => <Input {...props} />
export const Default = Template.bind({})
Default.args = {
  type: "text",
  label:"username"
}