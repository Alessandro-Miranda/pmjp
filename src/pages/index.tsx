import Head from 'next/head';
import Image from 'next/image';

import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as Separator from '@radix-ui/react-separator';

import styles from '@Styles/Home.module.scss';

import Arrow from '@Icons/arrow.svg';
import Location from '@Icons/location.svg';

import ArticleNumber from '@Components/ArticleNumber';
import Logo from '@Components/Logo';
import NavBar from '@Components/NavBar';
import Typography from '@Components/Typography';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#9c0701" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#9c0701" />
      </Head>
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
          className={styles.content__separator}
          orientation="horizontal"
        />
        <div className={styles.header__hero__container}>
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
      <main>
        <section className={styles.section}>
          <Typography variant="h1" className={styles.section__title}>
            conheça nossa paróquia
          </Typography>
          <Separator.Root
            orientation="horizontal"
            className={styles.content__separator}
          />

          <ScrollArea.Root className={styles.section__scrollArea__root}>
            <ScrollArea.Viewport className={styles.section__scrollArea__viewport}>
              <article className={styles.section__article}>
                <ArticleNumber number={1} />
                <div className={styles.section__article__text__container}>
                  <Typography variant="h2" className={styles.section__article__title}>
                    sobre a paróquia
                  </Typography>

                  <Typography>
                    {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}
                  </Typography>
                </div>
              </article>

              <article className={styles.section__article}>
                <ArticleNumber number={2} />
                <div className={styles.section__article__text__container}>
                  <Typography variant="h2" className={styles.section__article__title}>
                    missas
                  </Typography>

                  <Typography>
                    {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}
                  </Typography>
                </div>
              </article>

              <article className={styles.section__article}>
                <ArticleNumber number={3} />
                <div className={styles.section__article__text__container}>
                  <Typography variant="h2" className={styles.section__article__title}>
                    localização
                  </Typography>

                  <Image
                    src={Location}
                    alt="Localização"
                    className={styles.section__article__location}
                    aria-hidden
                  />
                  <Typography className={styles['section__article__text--location']}>
                    Rua Luiz de Vasconscelos, 100. Diadema - SP.
                  </Typography>

                  <Link
                    href="https://www.google.com/maps/dir/?api=1&destination=R.+Luiz+de+Vasconcelos,+100+-+Vila+Nogueira,+Diadema+-+SP,+09960-250"
                    className={styles.sectopn__article__location__link}
                    aria-label="Abrir o aplicativo ou site Google Maps para verificar o caminho de como chegar à Paróquia Menino Jesus de Praga "
                  >
                    como chegar
                    <Image
                      src={Arrow}
                      alt="Navegar para Google Maps"
                    />
                  </Link>

                </div>
              </article>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical">
              <ScrollArea.ScrollAreaThumb />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>

        </section>
      </main>
    </>
  );
}
