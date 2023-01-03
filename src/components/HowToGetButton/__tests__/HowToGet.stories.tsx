import { ComponentMeta, ComponentStory } from '@storybook/react';
import HowToGet from '..';

export default {
  title: 'Components/HowToGet',
  component: HowToGet,
  args: {
    mapsLink: '/test',
  },
  parameters: {
    docs: {
      description: {
        component: 'This component displays a link which takes to Google Maps app or website.',
      },
    },
  },
} as ComponentMeta<typeof HowToGet>;

export const Default: ComponentStory<typeof HowToGet> = (args) => <HowToGet {...args} />;
