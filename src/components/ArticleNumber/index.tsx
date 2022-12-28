import Typography from '@Components/Typography';
import styles from './styles.module.scss';

type Props = {
  number: number;
}

function ArticleNumber({ number }: Props) {
  return (
    <div className={styles.number__container}>
      <Typography variant="span" testid="article-number">
        {String(number).padStart(2, '0')}
      </Typography>
      <Typography variant="span">.</Typography>
    </div>
  );
}

export default ArticleNumber;
