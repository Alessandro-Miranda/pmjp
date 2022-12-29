import Logo from '@Components/Logo';
import NavBar from '@Components/NavBar';
import styles from '@Styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__navbar}>
          <Logo />
          <NavBar
            items={[
              { href: '#masses', label: 'missas' },
              { href: '#localization', label: 'localização' },
              { href: '#communities', label: 'comunidades' },
              { href: '#contact', label: 'contato', hasBorder: true },
            ]}
          />
        </div>
      </header>
      <main />
    </>
  );
}
