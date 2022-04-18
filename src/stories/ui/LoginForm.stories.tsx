import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginForm from '../../components/ui/LoginForm';

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