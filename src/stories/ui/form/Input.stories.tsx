import { ComponentMeta, ComponentStory } from "@storybook/react";

import Input from "../../../components/ui/form/Input"

type InputType = typeof Input

export default {
  title: "UI/form/Input",
  component: Input
} as ComponentMeta<InputType>

const Template: ComponentStory<InputType> = (props) => <Input {...props} />
export const Text = Template.bind({})
Text.args = {
  type: "text",
  label: "Username"
}

export const Password = Template.bind({})
Password.args = {
  type: "password",
  label: "Password"
}

export const Invalid = Template.bind({})
Invalid.args = {
  label:"email",
  error:"invalid email address"
}