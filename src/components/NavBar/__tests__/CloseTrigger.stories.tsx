import { expect, jest } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { Close } from '../MobileTrigger';
import styles from '../styles.module.scss';

export default {
  title: 'Components/NavBar/MobileTrigger/Close',
  component: Close,
  args: {
    handleCloseFn: jest.fn(),
    className: styles.navigation__closeList,
  },
  parameters: {
    docs: {
      description: {
        component: 'Mobile Trigger component. This component is responsible for closing the menu component',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{
        background: '#9c0701',
        position: 'relative',
        width: '100px',
        height: '75px',
      }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Close>;

const Template: ComponentStory<typeof Close> = (args) => <Close {...args} />;

export const Default = Template.bind({});

export const Clicked = Template.bind({});
Clicked.play = async ({
  args,
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  userEvent.click(canvas.getByTestId('button'));

  await waitFor(() => expect(args.handleCloseFn).toHaveBeenCalled());
};
