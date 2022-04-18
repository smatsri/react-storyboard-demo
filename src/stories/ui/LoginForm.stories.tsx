import { ComponentStory, ComponentMeta } from '@storybook/react';
import { userEvent } from '@storybook/testing-library';
import { waitFor, within } from '@testing-library/react';
import { expect } from '@storybook/jest';
import LoginForm from '../../components/ui/LoginForm';
import { delay } from '../../utils/general';
export default {
  title: 'UI/LoginForm',
  component: LoginForm,
  argTypes: { 
    onSubmit: { action: 'submited' }
  }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  title:"Login Form",
  username:"",
  password:""
}

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  title:"Login Form",
}
WithErrorMessage.play = async ({ args, canvasElement }: any) => {
  const canvas = within(canvasElement);
  await delay(1)
  const btn = canvas.getByRole('button');
  userEvent.click(btn);
  
  await delay(1)
  
  await waitFor(() => {
    const ctrUsername = canvas.getByTestId('ctr-username')
    expect(ctrUsername.classList.contains('invalid')).toBeTruthy()
  });
};