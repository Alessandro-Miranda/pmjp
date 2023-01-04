import Typography from '@Components/Typography';
import Welcomed from '@Images/welcomed.jpg';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as Card from '..';
import styles from './storiesStyle.module.scss';

export default {
  title: 'Components/Card',
  component: Card.Root,
  parameters: {
    docs: {
      description: {
        component: 'Composable component which exports a Root and Icon as sub-components to give granular access to each component part. The Card.Icon has aria-hidden attribute true as default',
      },
    },
  },
} as ComponentMeta<typeof Card.Root>;

const Template: ComponentStory<typeof Card.Root> = (args) => <Card.Root {...args} />;

export const CompleteCard = Template.bind({});

CompleteCard.args = {
  className: styles.card,
  style: {
    maxWidth: '400px',
  },
  children: (
    <>
      <Card.Icon src={Welcomed} alt="image test" className={styles.card__image} />
      <Typography className={styles.card__text}>Text test</Typography>
    </>
  ),
};
