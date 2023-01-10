import { Root } from '@radix-ui/react-dialog';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DialogClose from '..';

export default {
  title: 'Components/DialogClose',
  component: DialogClose,
  decorators: [
    (Story) => (
      <Root>
        <Story />
      </Root>
    )
  ],
  parameters: {
    docs: {
      description: {
        component: 'This component displays a dialog close button with text or icon option. Based on type props the component position and content is changed. Component style can be modify passing an optional className to className prop as well as text and icon to be displayed.',
      },
    },
  },
} as ComponentMeta<typeof DialogClose>;

const Template: ComponentStory<typeof DialogClose> = (args) => <DialogClose {...args} />;

export const Default = Template.bind({});

export const CloseButtonIcon = Template.bind({});
CloseButtonIcon.args = {
  type: 'icon',
};

export const CloseButtonText = Template.bind({});
CloseButtonText.args = {
  type: 'text',
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  customIcon: (
    <svg width="26" height="48" viewBox="0 0 26 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.8779 33.6162L25.6523 34.3259L12.8771 47.1011L0.165771 34.3259L0.940116 33.6162L12.3608 45.0369L12.3608 -5.33063e-07L13.4577 -5.81008e-07L13.4577 45.0369L24.8779 33.6162Z" fill="#9C0701" />
    </svg>
  ),
};

export const CustomText = Template.bind({});
CustomText.args = {
  type: 'text',
  customText: 'Close',
};
