import Typography from '@Components/Typography';
import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.scss';

type Props = {
  title: 'acolhida' | 'catequese' | 'música' | 'eucaristia' | 'liturgia';
  image: { src: StaticImageData; alt: string; };
  orientation: 'row' | 'row-reverse';
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
    >
      <Image
        src={image.src}
        alt={image.alt}
        className={`${styles.card__image} ${style?.image}`}
        aria-hidden
      />
      <Typography
        className={`${styles.card__text} ${style?.text}`}
      >
        {title}
      </Typography>
    </article>
  );
}

PastoralCard.defaultProps = { style: null };

export default PastoralCard;
