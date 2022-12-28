import { ComponentMeta, ComponentStory } from '@storybook/react';
import Logo from '../index';

export default {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component: 'This component is responsible for present the church logo on the screen',
      },
    },
  },
} as ComponentMeta<typeof Logo>;

export const Default: ComponentStory<typeof Logo> = (args) => <Logo />;
