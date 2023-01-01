import * as Separator from '@radix-ui/react-separator';

import Typography from '@Components/Typography';

import styles from './styles.module.scss';

type Props = {
  schedules: { weekday: string; time: string; }[];
}

function CommunitySchedules({ schedules }: Props) {
  return (
    <>
      <Typography className={styles.schedule__title}>
        Celebrações
      </Typography>

      {schedules.map(({ time, weekday }) => (
        <div
          className={styles.schedule__container}
          key={`${weekday}-${time}`}
        >
          <Typography>{weekday}</Typography>
          <Separator.Root orientation="vertical" />
          <Typography className={styles['schedule--time']}>{time}</Typography>
        </div>
      ))}
    </>
  );
}

export default CommunitySchedules;
