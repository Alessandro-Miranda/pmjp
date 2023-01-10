import * as Separator from '@radix-ui/react-separator';

import Typography from '@Components/Typography';

import styles from './styles.module.scss';

type Props = {
  schedules: { weekday: string; time: string; }[];
  title?: string;
}

function CommunitySchedules({ schedules, title }: Props) {
  return (
    <>

      { title ? (
        <Typography
          className={styles.schedule__title}
          data-testid="schedules-title"
        >
          {title}
        </Typography>
      ) : null}

      {schedules.map(({ time, weekday }) => (
        <div
          className={styles.schedule__container}
          key={`${weekday}-${time}`}
        >
          <Typography data-testid={`schedule-day-${weekday}-${time}`}>
            {weekday}
          </Typography>
          <Separator.Root orientation="vertical" />
          <Typography
            className={styles['schedule--time']}
            data-testid={`schedule-hour-${weekday}-${time}`}
          >
            {time}
          </Typography>
        </div>
      ))}
    </>
  );
}

CommunitySchedules.defaultProps = { title: null };

export default CommunitySchedules;
