/* eslint-disable global-require */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PastoralCard from '..';

export default {
  title: 'Components/PastoralCard',
  component: PastoralCard,
  args: {
    image: {
      src: '../../../../public/images/welcomed.jpg', alt: 'Acolhida',
    },
    title: 'acolhida',
  },
  parameters: {
    docs: {
      description: {
        component: 'This component display an simple card with an image and title about some church pastoral.',
      },
    },
  },
} as ComponentMeta<typeof PastoralCard>;

const Template: ComponentStory<typeof PastoralCard> = (args) => <PastoralCard {...args} />;

export const RowCard = Template.bind({});
RowCard.args = {
  orientation: 'row',
};

export const RowReverseCard = Template.bind({});
RowReverseCard.args = {
  orientation: 'row-reverse',
};
