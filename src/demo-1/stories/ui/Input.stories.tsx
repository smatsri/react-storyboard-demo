import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent } from "@storybook/testing-library";
import { within } from "@testing-library/react";
import { delay } from "../../../utils/general";

import Input from "../../components/ui/form/Input"

type InputType = typeof Input

export default {
  title: "UI/Input",
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
  name:"email",
  error:"invalid email address"
}
Invalid.play = async ({ args, canvasElement }: any) => {
  const canvas = within(canvasElement);
  await delay(0)
  userEvent.type(canvas.getByTestId('in-email'), 'my invalid email');
}