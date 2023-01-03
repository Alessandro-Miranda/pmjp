import Arrow from '@Icons/arrow.svg';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

type Props = {
  mapsLink: string;
  className?: string;
  ariaLabel?: string;
}

function HowToGet({ mapsLink, ariaLabel, className }: Props) {
  return (
    <Link
      href={mapsLink}
      className={className ?? styles.how__toGet__link}
      aria-label={ariaLabel ?? 'Abrir o aplicativo ou site do Google Maps para encontrar as rotas até à Paróquia Menino Jesus de Praga.'}
    >
      como chegar
      <Image
        src={Arrow}
        alt="Navegar para Google Maps"
        aria-hidden
      />
    </Link>
  );
}

HowToGet.defaultProps = {
  className: null,
  ariaLabel: null,
};

export default HowToGet;
