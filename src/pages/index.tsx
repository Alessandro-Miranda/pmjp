import Logo from '@Components/Logo';
import NavBar from '@Components/NavBar';
import Typography from '@Components/Typography';
import * as Separator from '@radix-ui/react-separator';
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

        <Separator.Root
          className={styles.header__navBarSeparator}
          orientation="horizontal"
        />
        <div className={styles.header__hero__container}>
          {/* botão */}
          { /** Texto decoration */}
          <blockquote cite="https://twitter.com/pontifex_pt/status/417623614901334016">
            <Typography className={styles.header__hero__citation}>
              “ No rosto do
              {' '}
              <Typography variant="span">Menino Jesus</Typography>
              , contemplamos o rosto de Deus. Vinde, adoremos! “
            </Typography>

            <Typography className={styles.header__hero__citation__author}>
              - papa francisco
            </Typography>
          </blockquote>
          <div role="banner" aria-hidden className={styles.header__hero__banner} />
        </div>
      </header>
      <main />
    </>
  );
}
