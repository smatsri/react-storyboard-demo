import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginForm from '../../components/ui/LoginForm';

export default {
  title: 'UI/LoginForm',
  component: LoginForm
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  title:"My Login Form"
}