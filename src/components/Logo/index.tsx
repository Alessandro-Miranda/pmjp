import logo from '@Logos/logo.png';
import Image from 'next/image';
import styles from './styles.module.scss';

function Logo() {
  return (
    <div className={styles.logo__container} data-testid="logo">
      <Image
        src={logo}
        alt="Logo Paróquia Menino Jesus de Praga"
        loading="lazy"
        className={styles.logo}
        fill
      />
    </div>
  );
}

export default Logo;
