import { Meta, StoryObj } from '@storybook/react';
import Header from '../components/CAT/Header';

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "Welcome to the Dashboard",
  },
};

export const Settings: Story = {
  args: {
    title: 'User settings',
  },
};
