import { ComponentStory, ComponentMeta } from '@storybook/react';
import Title from '../components/ui/Title';

export default {
  title: 'Demo/UI/Title',
  component: Title
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "My Title"
}