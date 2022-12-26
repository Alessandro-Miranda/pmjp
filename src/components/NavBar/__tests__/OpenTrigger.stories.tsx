import { expect, jest } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { Open } from '../MobileTrigger';
import styles from '../styles.module.scss';

export default {
  title: 'Components/NavBar/MobileTrigger/Open',
  component: Open,
  args: {
    handleOpenFn: jest.fn(),
    className: styles.trigger__open__buton,
  },
  parameters: {
    docs: {
      description: {
        component: 'Mobile Trigger component. This component is responsible for opening the menu component',
      },
    },
  },
} as ComponentMeta<typeof Open>;

const Template: ComponentStory<typeof Open> = (args) => <Open {...args} />;

export const Default = Template.bind({});

export const Clicked = Template.bind({});
Clicked.play = async ({
  args,
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  userEvent.click(canvas.getByTestId('button'));

  await waitFor(() => expect(args.handleOpenFn).toHaveBeenCalled());
};
