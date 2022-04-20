import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import Login from '../../components/pages/Login';
import mockApi from '../../services/mockApi';
import { ApiService } from '../../providers/ApiProvider';

export default {
  title: 'Pages/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => {
  const api = mockApi()
  return (
    <ApiService.Provider value={api} >
      <Login />
    </ApiService.Provider>
  )
};

export const Default = Template.bind({});

export const SuccessfullLogin = Template.bind({})
SuccessfullLogin.play = async ({ args, canvasElement }: any) => {
  const canvas = within(canvasElement);

  userEvent.type(canvas.getByTestId('in-username'), 'tester');
  userEvent.type(canvas.getByTestId('in-password'), 'supersecret');
  userEvent.click(canvas.getByRole('button'));


  await waitFor(() => {
    const successMessage = canvas.getByTestId('success-message')
    expect(successMessage).toBeTruthy()
  });
};

export const WithLoginError = Template.bind({})
WithLoginError.play = async ({ args, canvasElement }: any) => {
  const canvas = within(canvasElement);

  userEvent.type(canvas.getByTestId('in-username'), 'asd');
  userEvent.type(canvas.getByTestId('in-password'), 'supersecret');
  userEvent.click(canvas.getByRole('button'));

  await waitFor(() => {
    const successMessage = canvas.getByTestId('login-error')
    expect(successMessage).toBeTruthy()
  });
};