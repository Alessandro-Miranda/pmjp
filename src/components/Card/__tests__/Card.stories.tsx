import Typography from '@Components/Typography';
import MassIcon from '@Icons/mass.svg';
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
        component: 'Composable component which exports a Root, Icon and a RoundedDecoration as sub-components to give granular access to each component part. The Card.Icon has aria-hidden attribute true as default',
      },
    },
  },
} as ComponentMeta<typeof Card.Root>;

const Template: ComponentStory<typeof Card.Root> = (args) => <Card.Root {...args} />;

export const PastoralCard = Template.bind({});

PastoralCard.args = {
  className: styles.card,
  style: {
    maxWidth: '300px',
  },
  children: (
    <>
      <Card.Icon src={Welcomed} alt="image test" className={styles.card__image} />
      <Typography className={styles.card__text}>Text test</Typography>
    </>
  ),
};

export const ScheduleCard = Template.bind({});

ScheduleCard.args = {
  children: (
    <div className={styles.section__schedules__card__container}>
      <Card.Root
        className={styles.section__schedules__card}
        aria-label="Horário de missas e celebrações"
      >
        <Card.Icon
          src={MassIcon}
          alt="Horário das missas"
          loading="lazy"
        />
        <Typography>
          missas
        </Typography>
      </Card.Root>
      <Card.RoundedDecoration
        className={styles.section__schedules__card__rounded__decoration}
      />
    </div>
  ),
};
