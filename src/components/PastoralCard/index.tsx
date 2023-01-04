import Typography from '@Components/Typography';
import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.scss';

type Props = {
  /**
   * Card title
   */
  title: 'acolhida' | 'catequese' | 'música' | 'eucaristia' | 'liturgia';
  /**
   * Image properties
   */
  image: { src: StaticImageData | string; alt: string; };
  /**
   * Container children orientation.
   */
  orientation: 'row' | 'row-reverse';
  /**
   * Additional style to component elements.
   */
  style?: { container?: string; text?: string; image?: string; };
}

function PastoralCard({
  image,
  orientation,
  title,
  style,
}: Props) {
  return (
    <article
      className={`${style?.container ?? styles.card} ${styles[orientation]}`}
      aria-label={`Notas sobre a pastoral ${title}`}
      data-testid="pastoral-card"
    >
      <Image
        src={image.src}
        alt={image.alt}
        className={`${styles.card__image} ${style?.image}`}
        aria-hidden
        data-testid="pastoral-card-image"
      />
      <Typography
        className={`${styles.card__text} ${style?.text}`}
        testid="pastoral-card-title"
      >
        {title}
      </Typography>
    </article>
  );
}

PastoralCard.defaultProps = { style: null };

export default PastoralCard;
