import { expect, jest } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import React from 'react';
import Button from '..';

const buttonChildren = React.createElement('p', {
  'data-testid': 'button-children',
}, 'Click Me');

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    handleClickFn: jest.fn(),
    children: buttonChildren,
    className: 'story-class',
    testid: 'story-test',
  },
  parameters: {
    docs: {
      description: {
        component: 'Button component. When clicked, it trigger a click handler function defined by props.',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Clicked = Template.bind({});

Clicked.play = async ({
  args, canvasElement,
}) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByTestId('story-test'));
  await waitFor(() => expect(args.handleClickFn).toHaveBeenCalled());
};
