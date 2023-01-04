import Head from 'next/head';
import Image from 'next/image';

import * as Accordion from '@radix-ui/react-accordion';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as Separator from '@radix-ui/react-separator';

import Email from '@Icons/email.svg';
import Location from '@Icons/location-white.svg';
import MobilePhone from '@Icons/mobile.svg';
import Open from '@Icons/open.svg';
import CatechismPastoral from '@Images/catechism.jpg';
import EucharistPastoral from '@Images/eucharist.jpg';
import LiturgyPastoral from '@Images/liturgy.jpg';
import MusicPastoral from '@Images/music.jpg';
import WelcomedPastoral from '@Images/welcomed.jpg';

import Address from '@Components/Address';
import ArticleNumber from '@Components/ArticleNumber';
import Logo from '@Components/Logo';
import NavBar from '@Components/NavBar';
import Typography from '@Components/Typography';

import CommunitySchedules from '@Components/CommunitySchedules';
import HowToGet from '@Components/HowToGetButton';
import PastoralCard from '@Components/PastoralCard';

import styles from '@Styles/Home.module.scss';
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
              { href: '#schedules', label: 'horários' },
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

          <div
            role="banner"
            aria-hidden
            className={styles.header__hero__banner}
          />
        </div>
      </header>
      <main>
        <section
          className={styles.section}
          role="contentinfo"
          aria-label="Conheça nossa paróquia. História, horários de atividades e localização"
        >
          <Typography
            variant="h1"
            className={styles.section__title}
          >
            conheça nossa paróquia
          </Typography>
          <Separator.Root
            orientation="horizontal"
            className={styles.content__separator}
          />

          <ScrollArea.Root className={styles.section__scrollArea__root}>
            <ScrollArea.Viewport className={styles.section__scrollArea__viewport}>
              <article
                className={styles.section__article}
                role="contentinfo"
                aria-label="História da paróquia"
              >
                <ArticleNumber number={1} />

                <div className={styles.section__article__text__container}>
                  <Typography
                    variant="h2"
                    className={styles.section__article__title}
                  >
                    sobre a paróquia
                  </Typography>

                  <Typography>
                    {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}
                  </Typography>
                </div>
              </article>

              <article
                className={styles.section__article}
                id="schedules"
                role="contentinfo"
                aria-label="Horários das atividades da paróquia (missas, terços, grupos de oração etc.)"
              >
                <ArticleNumber number={2} />

                <div className={styles.section__article__text__container}>
                  <Typography variant="h2" className={styles.section__article__title}>
                    horários
                  </Typography>

                  <Typography>
                    {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}
                  </Typography>
                </div>
              </article>

              <article
                className={styles.section__article}
                id="localization"
                role="contentinfo"
                aria-label="Localização da paróquia: endereço e link para Google Maps"
              >
                <ArticleNumber number={3} />

                <div className={styles.section__article__text__container}>
                  <Typography variant="h2" className={styles.section__article__title}>
                    localização
                  </Typography>

                  <Address
                    address="Rua Luiz de Vasconscelos, 100. Diadema - SP."
                  />

                  <HowToGet
                    mapsLink="https://www.google.com/maps/dir/?api=1&destination=R.+Luiz+de+Vasconcelos,+100+-+Vila+Nogueira,+Diadema+-+SP,+09960-250"
                  />
                </div>
              </article>
            </ScrollArea.Viewport>

            <ScrollArea.Scrollbar orientation="vertical">
              <ScrollArea.ScrollAreaThumb />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </section>

        <section
          className={`${styles.section} ${styles['section--communities']}`}
          id="communities"
          role="contentinfo"
          aria-label="Comunidades da Paróquia Menino Jesus de Praga"
        >
          <Typography variant="h1" className={styles.section__title}>
            nossas comunidades
          </Typography>

          <div className={styles.section__communities__text}>
            <Typography>
              Além da paróquia Matriz Menino Jesus de Praga, há também 5 comunidades, totalizando 6
              capelas espalhadas pelo nosso bairro, para que você possa encontrar a mais próxima e
              acompanhar as celebrações da santa missa e pastorais.
            </Typography>

            <Accordion.Root type="single" collapsible>
              <Accordion.Item
                value="nossa senhora de nazaré"
                className={styles.section__communities__accordion}
              >
                <Accordion.Trigger
                  className={styles.section__communities__accordion__trigger}
                  aria-label="Ver informações da comunidade Nossa Senhora de Nazaré"
                >
                  nossa senhora de nazaré
                  <Image
                    src={Open}
                    alt="Ver informações"
                    aria-hidden
                  />
                </Accordion.Trigger>
                <Accordion.Content className={styles.section__communities__accordion__content}>
                  <div>
                    <Address
                      address="Rua Matia de Albuquerque, 49. Vila Lidia. Diadema - SP."
                      textClass={styles.section__communities__accordion__content__address}
                    />

                    <CommunitySchedules
                      schedules={[
                        { weekday: 'Sexta-feira', time: '19:30' },
                        { weekday: 'Domingo', time: '08:30' },
                      ]}
                    />

                    <HowToGet
                      mapsLink="https://www.google.com/maps/dir/?api=1&destination=Capela+Maria+de+Nazaré,+R.+Matias+de+Albuquerque,+49+-+Vila+Lídia,+Diadema+-+SP,+09942-170"
                      ariaLabel="Abrir o aplicativo ou site Google Maps para visualizar as rotas para a comunidade Maria de Nazaré"
                    />
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item
                value="são paulo apóstolo"
                className={styles.section__communities__accordion}
              >
                <Accordion.Trigger
                  className={styles.section__communities__accordion__trigger}
                  aria-label="Ver informações da comunidade São Paulo Apóstolo"
                >
                  são paulo apóstolo
                  <Image
                    src={Open}
                    alt="Ver informações"
                    aria-hidden
                  />
                </Accordion.Trigger>
                <Accordion.Content className={styles.section__communities__accordion__content}>
                  <div>
                    <Address
                      address="Rua Mozart, 271. Jardim Arco Íris. Diadema - SP."
                      textClass={styles.section__communities__accordion__content__address}
                    />

                    <CommunitySchedules
                      schedules={[
                        { weekday: 'Quarta-feira', time: '19:30' },
                        { weekday: 'Sábado', time: '08:30' },
                      ]}
                    />

                    <HowToGet
                      mapsLink="https://www.google.com/maps/dir/?api=1&destination=Capela+São+Paulo+Apóstolo,+R.+Mozart,+271+-+Jardim+Arco-Iris,+Diadema+-+SP,+09960-590"
                      ariaLabel="Abrir o aplicativo ou site Google Maps para visualizar as rotas para a comunidade São Paulo Apóstolo"
                    />
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item
                value="nossa senhora aparecida"
                className={styles.section__communities__accordion}
              >
                <Accordion.Trigger
                  className={styles.section__communities__accordion__trigger}
                  aria-label="Ver informações da comunidade Nossa Senhora Aparecida"
                >
                  nossa senhora aparecida
                  <Image
                    src={Open}
                    alt="Ver informações"
                    aria-hidden
                  />
                </Accordion.Trigger>
                <Accordion.Content className={styles.section__communities__accordion__content}>
                  <div>
                    <Address
                      address="Rua João Batista Alves do Nascimento, 411. Vila Popular. Diadema - SP."
                      textClass={styles.section__communities__accordion__content__address}
                    />

                    <CommunitySchedules
                      schedules={[
                        { weekday: 'Quarta-feira', time: '19:30' },
                        { weekday: 'Domingo', time: '08:30' },
                      ]}
                    />

                    <HowToGet
                      mapsLink="https://www.google.com/maps/dir/?api=1&destination=Capela+Nossa+Senhora+Aparecida,+Vila+Popular+-+Rua+João+Batista+Alves+do+Nascimento,+411+-+Vila+Nogueira,+Diadema+-+SP,+09951-090"
                      ariaLabel="Abrir o aplicativo ou site Google Maps para visualizar as rotas para a comunidade São Paulo Apóstolo"
                    />
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item
                value="santa rita de cássia"
                className={styles.section__communities__accordion}
              >
                <Accordion.Trigger
                  className={styles.section__communities__accordion__trigger}
                  aria-label="Ver informações da comunidade Santa Rita de Cássia"
                >
                  santa rita de cássia
                  <Image
                    src={Open}
                    alt="Ver informações"
                    aria-hidden
                  />
                </Accordion.Trigger>
                <Accordion.Content className={styles.section__communities__accordion__content}>
                  <div>
                    <Address
                      address="Rua Dom Marcos Teixeira, 155. Bairro Novo (Noevo). Diadema - SP."
                      textClass={styles.section__communities__accordion__content__address}
                    />

                    <CommunitySchedules
                      schedules={[
                        { weekday: 'Sexta-feira', time: '19:30' },
                        { weekday: 'Domingo', time: '17:00' },
                      ]}
                    />

                    <HowToGet
                      mapsLink="https://www.google.com/maps/dir/?api=1&destination=Comunidade+Santa+Rita+de+Cássia,+R.+Dom+Marcos+Teixeira,+155+-+Jardim+Barrionuevo+(Vila+Nogueira),+Diadema+-+SP,+09960-360"
                      ariaLabel="Abrir o aplicativo ou site Google Maps para visualizar as rotas para a comunidade São Paulo Apóstolo"
                    />
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item
                value="imaculada conceição"
                className={styles.section__communities__accordion}
              >
                <Accordion.Trigger
                  className={styles.section__communities__accordion__trigger}
                  aria-label="Ver informações da comunidade Imaculada Conceição"
                >
                  imaculada conceição
                  <Image
                    src={Open}
                    alt="Ver informações"
                    aria-hidden
                  />
                </Accordion.Trigger>
                <Accordion.Content className={styles.section__communities__accordion__content}>
                  <div>
                    <Address
                      address="Rua Isaac Aizemberg, 96. Vila Nogueira. Diadema - SP."
                      textClass={styles.section__communities__accordion__content__address}
                    />

                    <CommunitySchedules
                      schedules={[
                        { weekday: 'Sexta-feira', time: '19:30' },
                        { weekday: 'Domingo', time: '08:30' },
                      ]}
                    />

                    <HowToGet
                      mapsLink="https://www.google.com/maps/dir/?api=1&destination=Capela+Imaculada+Conceição,+Goyotin,+R.+Isac+Aizemberg,+96,+Diadema+-+SP,+09951-225"
                      ariaLabel="Abrir o aplicativo ou site Google Maps para visualizar as rotas para a comunidade São Paulo Apóstolo"
                    />
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </section>

        <aside className={styles.pastorals__wrapper} aria-labelledby="pastorals__wrapper__text">
          <Typography className={styles.pastorals__wrapper__text} id="pastorals__wrapper__text">
            “ venha fazer parte das pastorais e movimentos da nossa comunidade “
          </Typography>
        </aside>

        <div>
          <PastoralCard
            title="catequese"
            orientation="row"
            image={{ src: CatechismPastoral, alt: 'Catequese e crisma de jovens e adultos' }}
            style={{ image: styles['pastoral__cards--catechism'] }}
          />

          <PastoralCard
            title="acolhida"
            orientation="row-reverse"
            image={{ src: WelcomedPastoral, alt: 'Pastoral da acolhida' }}
            style={{ image: styles['pastoral__cards--welcomed'] }}
          />

          <PastoralCard
            title="música"
            orientation="row"
            image={{ src: MusicPastoral, alt: 'Pastoral da música' }}
            style={{ image: styles['pastoral__cards--music'] }}
          />

          <PastoralCard
            title="eucaristia"
            orientation="row-reverse"
            image={{ src: EucharistPastoral, alt: 'Ministério da eucaristia' }}
          />

          <PastoralCard
            title="liturgia"
            orientation="row"
            image={{ src: LiturgyPastoral, alt: 'Liturgia' }}
            style={{ image: styles['pastoral__cards--liturgy'] }}
          />
        </div>
      </main>
      <footer className={styles.footer}>
        <div>
          <div className={styles.footer__address__container}>
            <Typography className={styles.footer__entityName}>
              paróquia menino jesus de praga
            </Typography>

            <address className={styles.footer__address}>
              <div>
                <Image
                  src={Location}
                  alt="Localização"
                  aria-hidden
                  className={styles.footer__address__icons}
                />
                <Typography>
                  Rua Luiz de Vasconcelos, 100. Jardim Marilene, Diadema - SP
                </Typography>
              </div>

              <div>
                <Image
                  src={MobilePhone}
                  alt="Telefone"
                  aria-hidden
                  className={`${styles.footer__address__icons} ${styles['footer__address__icons--mobile']}`}
                />
                <Typography>
                  +55 11 4000 0000
                </Typography>
              </div>

              <div>
                <Image
                  src={Email}
                  alt="E-mail"
                  aria-hidden
                  className={`${styles.footer__address__icons} ${styles['footer__address__icons--email']}`}
                />
                <Typography>
                  paroquia@email.com
                </Typography>
              </div>
            </address>
          </div>
          <div className={styles.footer__socialmedia}>
            <Link href="/facebook">facebook</Link>
            <Link href="/instagram">instagram</Link>
            <Link href="/youtube">youtube</Link>
          </div>
        </div>

        <small className={styles.footer__copy}>
          <Typography variant="span">
            paróquia menino jesus de praga &copy;
            {' '}
            {new Date().getFullYear()}
            . All rights reserved
          </Typography>
          <Typography variant="span">
            developed by
            {' '}
            <Typography variant="span" className={styles.footer__copy__developer}>
              Alessandro Miranda
            </Typography>
          </Typography>
          <Typography variant="span">
            images by
            {' '}
            <cite>freepik</cite>
          </Typography>
        </small>
      </footer>
    </>
  );
}
