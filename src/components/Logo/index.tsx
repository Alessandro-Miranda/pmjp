import logo from '@Logos/logo.png';
import Image from 'next/image';
import styles from './styles.module.scss';

function Logo() {
  return (
    <div className={styles.logo__container} data-testid="logo">
      <Image
        src={logo}
        alt="Logo Paróquia Menino Jesus de Praga"
        className={styles.logo}
        priority
      />
    </div>
  );
}

export default Logo;
