import { ComponentStory, ComponentMeta } from '@storybook/react';
import Login from '../../components/pages/Login';
import { useApi } from '../../hooks/useApi';
import { ApiService } from '../../providers/ApiProvider';

ApiService

export default {
  title: 'Pages/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => {
  const api = useApi()
  return (
    <ApiService.Provider value={api}>
      <Login />
    </ApiService.Provider>
  )
};

export const Default = Template.bind({});
Default.args = {
}