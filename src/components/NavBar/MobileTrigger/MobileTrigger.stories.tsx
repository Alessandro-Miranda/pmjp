import { expect, jest } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import MobileTrigger from '.';

export default {
  title: 'Components/NavBar/MobileTrigger',
  component: MobileTrigger,
  args: { handleClickFn: jest.fn() },
  parameters: {
    docs: {
      description: {
        component: `This component is **only showed on mobile devices or small screens**.
        When it is clicked, it must invoke a handle function responsible for opening or closing
        the menu mobile component in the mobile version.`,
      },
    },
  },
} as ComponentMeta<typeof MobileTrigger>;

const Template: ComponentStory<typeof MobileTrigger> = (args) => <MobileTrigger {...args} />;

export const Default = Template.bind({});

export const Clicked = Template.bind({});
Clicked.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  userEvent.click(canvas.getByTestId('button-open-menu'));

  await waitFor(() => expect(args.handleClickFn).toHaveBeenCalled());
};
