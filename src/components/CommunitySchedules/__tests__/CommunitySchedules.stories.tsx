import { ComponentMeta, ComponentStory } from '@storybook/react';
import CommunitySchedules from '..';

export default {
  title: 'Components/CommunityScheules',
  component: CommunitySchedules,
  args: {
    title: 'Missas',
    schedules: [
      {
        weekday: 'Quarta-feira', time: '19:30',
      },
      {
        weekday: 'Domingo', time: '10:00',
      }
    ],
  },
  parameters: {
    docs: {
      description: {
        component: 'This component is used in institucional web site to presenting masses schedules to each church community.',
      },
    },
  },
} as ComponentMeta<typeof CommunitySchedules>;

export const Default: ComponentStory<
  typeof CommunitySchedules
> = (args) => <CommunitySchedules {...args} />;
