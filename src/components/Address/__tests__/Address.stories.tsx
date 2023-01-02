import { ComponentMeta, ComponentStory } from '@storybook/react';
import Address from '..';

export default {
  title: 'Components/Address',
  component: Address,
  args: {
    address: 'Joseph test street',
  },
  parameters: {
    docs: {
      description: {
        component: 'Component used as an address icon and information into institucional website.',
      },
    },
  },
} as ComponentMeta<typeof Address>;

export const Default: ComponentStory<typeof Address> = (args) => <Address {...args} />;
