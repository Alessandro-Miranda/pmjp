import { AnimationProps, motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import * as Accordion from '@radix-ui/react-accordion';
import * as Dialog from '@radix-ui/react-dialog';
import * as Separator from '@radix-ui/react-separator';

import Arrow from '@Icons/arrow.svg';
import Email from '@Icons/email.svg';
import Location from '@Icons/location-white.svg';
import MassIcon from '@Icons/mass.svg';
import MobilePhone from '@Icons/mobile.svg';
import Open from '@Icons/open.svg';
import CatechismPastoral from '@Images/catechism.jpg';
import EucharistPastoral from '@Images/eucharist.jpg';
import LiturgyPastoral from '@Images/liturgy.jpg';
import MusicPastoral from '@Images/music.jpg';
import WelcomedPastoral from '@Images/welcomed.jpg';

import Address from '@Components/Address';
import ArticleNumber from '@Components/ArticleNumber';
import Button from '@Components/Button';
import DialogClose from '@Components/DialogClose';
import Logo from '@Components/Logo';
import NavBar from '@Components/NavBar';
import Typography from '@Components/Typography';

import * as Card from '@Components/Card';
import CommunitySchedules from '@Components/CommunitySchedules';
import HowToGet from '@Components/HowToGetButton';

import styles from '@Styles/Home.module.scss';

export default function Home() {
  const replaceCSSMeasure = (value: string, valueSearched: string) => value.replace(valueSearched, '');

  const calcMaxLeftDrag = (childrenCount: number) => {
    const CARD_WIDTH = Number(replaceCSSMeasure(styles.cardWidth, 'rem'));
    const CARD_GAP = Number(replaceCSSMeasure(styles.cardsGap, 'px'));
    const PIXEL_WIDTH = 16;

    return (CARD_WIDTH * PIXEL_WIDTH + CARD_GAP) * (childrenCount - 1) * -1;
  };

  const schedulesCardAnimationInitial: AnimationProps['initial'] = {
    opacity: 0,
    transform: 'translateY(20%)',
  };

  const schedulesCardAnimationVariants = {
    onScreen: {
      opacity: 1,
      transform: 'translateY(0%)',
      transition: {
        opacity: { delay: 0.1, duration: 0.2, type: 'spring' },
        transform: { delay: 0.4, duration: 0.9, type: 'spring' },
      },
    },
  };

  return (
    <>
      <Head>
        <meta name="theme-color" content="#9c0701" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#9c0701" />
        <meta name="description" content="A Par??quia Menino Jesus de Praga, localizada no bairro Marilene, em Diadema, ?? uma par??quia que, jutamente ??s suas 6 comunidades, t??m a miss??o de anunciar a palavra de Deus e evangelizar atrav??s de missas, grupos de ora????o, ora????o do ter??o, catequese e outras atividades religiosas que acontecem diariamente em diversos hor??rios." />

        <title>Par??quia Menino Jesus de Praga | Institucional</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.header__navbar}>
          <Logo />
          <NavBar
            items={[
              { href: '#schedules', label: 'hor??rios' },
              { href: '#localization', label: 'localiza????o' },
              { href: '#communities', label: 'comunidades' },
              { href: '#contact', label: 'contato', hasBorder: true }
            ]}
          />
        </div>

        <Separator.Root
          className={styles.content__separator}
          orientation="horizontal"
        />

        <div className={styles.header__hero__container}>
          <div
            className={styles.header__hero__churchName}
            aria-label="Nome por extenso da Par??quia Menino Jesus de Praga"
          >
            <Typography variant="span">
              par??quia
            </Typography>
            <Typography variant="span">
              menino
            </Typography>
            <Typography variant="span">
              jesus
            </Typography>
            <Typography variant="span">
              de praga
            </Typography>
          </div>
          <blockquote cite="https://twitter.com/pontifex_pt/status/417623614901334016">
            <Typography className={styles.header__hero__citation}>
              ??? No rosto do
              {' '}
              <Typography
                variant="span"
                className={styles.header__hero__citation__decoration}
              >
                <Typography
                  variant="span"
                  className={styles['header__hero__citation__decoration--mobile']}
                >
                  Menino
                </Typography>
                {' '}
                <Typography variant="span">
                  Jesus
                </Typography>
              </Typography>
              , contemplamos o rosto de Deus. Vinde, adoremos! ???
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

        <Button
          handleClickFn={() => {
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={styles.header__seeMore__button}
          ariaLabel="Veja mais informa????es sobre a par??quia"
        >
          <Image
            src={Arrow}
            alt="Ver mais informa????es"
            aria-hidden
          />
          <Typography variant="span">conhe??a</Typography>
        </Button>
      </header>
      <main>
        <section
          className={styles.section}
          id="about"
          role="contentinfo"
          aria-label="Conhe??a nossa par??quia. Hist??ria, hor??rios de atividades e localiza????o"
        >
          <Typography
            variant="h1"
            className={styles.section__title}
          >
            conhe??a nossa par??quia
          </Typography>
          <Separator.Root
            orientation="horizontal"
            className={styles.content__separator}
          />

          <article
            className={styles.section__article}
            role="contentinfo"
            aria-label="Hist??ria da par??quia"
          >
            <ArticleNumber number={1} />

            <div className={styles.section__article__text__container}>
              <Typography
                variant="h2"
                className={styles.section__article__title}
              >
                sobre a par??quia
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
            aria-label="Hor??rios das atividades da par??quia (missas, ter??os, grupos de ora????o etc.)"
          >
            <ArticleNumber number={2} />

            <div className={styles.section__article__text__container}>
              <Typography variant="h2" className={styles.section__article__title}>
                hor??rios
              </Typography>

              <motion.div
                drag="x"
                whileDrag={{ scale: 0.95 }}
                dragConstraints={{
                  left: calcMaxLeftDrag(5),
                  right: 0,
                }}
                aria-orientation="horizontal"
                className={styles.section__schedules__container}
              >
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <motion.div
                      className={styles.section__schedules__card__container}
                      initial={schedulesCardAnimationInitial}
                      whileInView="onScreen"
                      variants={schedulesCardAnimationVariants}
                      viewport={{ once: true }}
                    >
                      <Card.Root
                        className={styles.section__schedules__card}
                        aria-label="Ver hor??rio de missas e celebra????es"
                      >
                        <Card.Icon src={MassIcon} alt="Hor??rio das missas" loading="lazy" />
                        <Typography>missas</Typography>
                      </Card.Root>
                      <Card.RoundedDecoration
                        className={styles.section__schedules__card__rounded__decoration}
                      />
                    </motion.div>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className={styles.section__schedules__dialog__overlay} />
                    <Dialog.Content
                      className={`${styles.section__schedules__dialog__content} ${styles['section__schedules__dialog__content--masses']}`}
                    >
                      <CommunitySchedules
                        title="Missas"
                        schedules={[
                          { weekday: 'Segunda-feira', time: '19:30' },
                          { weekday: 'Quarta-feira', time: '15:00' },
                          { weekday: 'Quinta-feira', time: '19:30' },
                          { weekday: 'Sexta-feira', time: '15:00' },
                          { weekday: 'S??bado', time: '16:00' },
                          { weekday: 'Domingo', time: '07:00' },
                          { weekday: 'Domingo', time: '10:00' },
                          { weekday: 'Domingo', time: '17:00' }
                        ]}
                      />

                      <DialogClose type="text" />
                      <DialogClose />
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <motion.div
                      className={styles.section__schedules__card__container}
                      initial={schedulesCardAnimationInitial}
                      whileInView="onScreen"
                      variants={schedulesCardAnimationVariants}
                      viewport={{ once: true }}
                    >
                      <Card.Root
                        className={styles.section__schedules__card}
                        aria-label="Ver hor??rio do grupo de ora????o"
                      >
                        <Card.Icon src={MassIcon} alt="Hor??rio do grupo de ora????o" loading="lazy" />
                        <Typography>grupo de ora????o</Typography>
                      </Card.Root>

                      <Card.RoundedDecoration
                        className={styles.section__schedules__card__rounded__decoration}
                      />
                    </motion.div>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className={styles.section__schedules__dialog__overlay} />
                    <Dialog.Content className={styles.section__schedules__dialog__content}>
                      <Dialog.Title>Grupo de Ora????o</Dialog.Title>
                      <Dialog.Description>
                        Venha participar do nosso grupo de ora????o, um momento de partilha da
                        palavra, reflex??o e ora????o.
                      </Dialog.Description>
                      <CommunitySchedules
                        title="Hor??rio"
                        schedules={[{ weekday: 'Ter??a-feira', time: '19:30' }]}
                      />

                      <DialogClose type="text" />
                      <DialogClose />
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <motion.div
                      className={styles.section__schedules__card__container}
                      initial={schedulesCardAnimationInitial}
                      whileInView="onScreen"
                      variants={schedulesCardAnimationVariants}
                      viewport={{ once: true }}
                    >
                      <Card.Root
                        className={styles.section__schedules__card}
                        aria-label="Ver hor??rio ora????o do santo ter??o"
                      >
                        <Card.Icon
                          src={MassIcon}
                          alt="Hor??rio ora????o do santo ter??o"
                          loading="lazy"
                        />
                        <Typography>Ora????o do Ter??o</Typography>
                      </Card.Root>

                      <Card.RoundedDecoration
                        className={styles.section__schedules__card__rounded__decoration}
                      />
                    </motion.div>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className={styles.section__schedules__dialog__overlay} />
                    <Dialog.Content className={styles.section__schedules__dialog__content}>
                      <Dialog.Title>Santo ter??o</Dialog.Title>
                      <Dialog.Description>
                        Venha se fortalecer espiritualmente atrav??s da ora????o do santo ter??o.
                      </Dialog.Description>
                      <CommunitySchedules
                        title="Hor??rios"
                        schedules={[
                          { weekday: 'Quarta-feira (Ter??o com as crian??as)', time: '19:00' },
                          { weekday: 'Quarta-feira', time: '19:30' }
                        ]}
                      />
                      <DialogClose type="text" />
                      <DialogClose />
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <motion.div
                      className={styles.section__schedules__card__container}
                      initial={schedulesCardAnimationInitial}
                      whileInView="onScreen"
                      variants={schedulesCardAnimationVariants}
                      viewport={{ once: true }}
                    >
                      <Card.Root
                        className={styles.section__schedules__card}
                        aria-label="Ver hor??rio das mil ave marias"
                      >
                        <Card.Icon src={MassIcon} alt="Hor??rio das mil ave marias" loading="lazy" />
                        <Typography>Mil Ave Marias</Typography>
                      </Card.Root>

                      <Card.RoundedDecoration
                        className={styles.section__schedules__card__rounded__decoration}
                      />
                    </motion.div>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className={styles.section__schedules__dialog__overlay} />
                    <Dialog.Content className={styles.section__schedules__dialog__content}>
                      <Dialog.Title>Mil Ave Marias</Dialog.Title>
                      <Dialog.Description>
                        Venha interceder pelo nosso par??co e, tamb??m, por todas as suas inten????es,
                        rezando conosco as Mil Ave Marias.
                      </Dialog.Description>
                      <CommunitySchedules
                        title="Hor??rios"
                        schedules={[{ weekday: '1?? s??bado do m??s', time: '08:00' }]}
                      />
                      <DialogClose type="text" />
                      <DialogClose />
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <motion.div
                      className={styles.section__schedules__card__container}
                      initial={schedulesCardAnimationInitial}
                      whileInView="onScreen"
                      variants={schedulesCardAnimationVariants}
                      viewport={{ once: true }}
                    >
                      <Card.Root
                        className={styles.section__schedules__card}
                        aria-label="Ver hor??rio de atendimento da secretaria"
                      >
                        <Card.Icon
                          src={MassIcon}
                          alt="Hor??rio de atendimento da secretaria"
                          loading="lazy"
                        />
                        <Typography>secretaria</Typography>
                      </Card.Root>
                      <Card.RoundedDecoration
                        className={styles.section__schedules__card__rounded__decoration}
                      />
                    </motion.div>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className={styles.section__schedules__dialog__overlay} />
                    <Dialog.Content className={styles.section__schedules__dialog__content}>
                      <Dialog.Title>Secret??ria</Dialog.Title>
                      <Dialog.Description>
                        Na nossa secret??ria paroquial voc?? pode tirar d??vidas, contribuir com o seu
                        d??zimo, agendar batizados e casamentos e muito mais.
                      </Dialog.Description>

                      <CommunitySchedules
                        title="Hor??rios"
                        schedules={[
                          { weekday: 'Segunda a Sexta', time: '08:00 ??s 17:00' },
                          { weekday: 'S??bado', time: '08:00 ??s 14:00' }
                        ]}
                      />
                      <DialogClose type="text" />
                      <DialogClose />
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </motion.div>
            </div>
          </article>

          <article
            className={styles.section__article}
            id="localization"
            role="contentinfo"
            aria-label="Localiza????o da par??quia: endere??o e link para Google Maps"
          >
            <ArticleNumber number={3} />

            <div className={styles.section__article__text__container}>
              <Typography variant="h2" className={styles.section__article__title}>
                localiza????o
              </Typography>

              <Address
                address="Rua Luiz de Vasconscelos, 100. Diadema - SP."
              />

              <HowToGet
                mapsLink="https://www.google.com/maps/dir/?api=1&destination=R.+Luiz+de+Vasconcelos,+100+-+Vila+Nogueira,+Diadema+-+SP,+09960-250"
              />
            </div>
          </article>
        </section>

        <section
          className={`${styles.section} ${styles['section--communities']}`}
          id="communities"
          role="contentinfo"
          aria-label="Comunidades da Par??quia Menino Jesus de Praga"
        >
          <Typography variant="h1" className={styles.section__title}>
            nossas comunidades
          </Typography>

          <div className={styles.section__communities__text}>
            <Typography>
              Al??m da par??quia Matriz Menino Jesus de Praga, h?? tamb??m 5 comunidades, totalizando 6
              capelas espalhadas pelo nosso bairro, para que voc?? possa encontrar a mais pr??xima e
              acompanhar as celebra????es da santa missa e pastorais.
            </Typography>

            <Accordion.Root type="single" collapsible>
              <Accordion.Item
                value="nossa senhora de nazar??"
                className={styles.section__communities__accordion}
              >
                <Accordion.Trigger
                  className={styles.section__communities__accordion__trigger}
                  aria-label="Ver informa????es da comunidade Nossa Senhora de Nazar??"
                >
                  nossa senhora de nazar??
                  <Image
                    src={Open}
                    alt="Ver informa????es"
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
                      title="missas"
                      schedules={[
                        { weekday: 'Sexta-feira', time: '19:30' },
                        { weekday: 'Domingo', time: '08:30' }
                      ]}
                    />

                    <HowToGet
                      mapsLink="https://www.google.com/maps/dir/?api=1&destination=Capela+Maria+de+Nazar??,+R.+Matias+de+Albuquerque,+49+-+Vila+L??dia,+Diadema+-+SP,+09942-170"
                      ariaLabel="Abrir o aplicativo ou site Google Maps para visualizar as rotas para a comunidade Maria de Nazar??"
                    />
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item
                value="s??o paulo ap??stolo"
                className={styles.section__communities__accordion}
              >
                <Accordion.Trigger
                  className={styles.section__communities__accordion__trigger}
                  aria-label="Ver informa????es da comunidade S??o Paulo Ap??stolo"
                >
                  s??o paulo ap??stolo
                  <Image
                    src={Open}
                    alt="Ver informa????es"
                    aria-hidden
                  />
                </Accordion.Trigger>
                <Accordion.Content className={styles.section__communities__accordion__content}>
                  <div>
                    <Address
                      address="Rua Mozart, 271. Jardim Arco ??ris. Diadema - SP."
                      textClass={styles.section__communities__accordion__content__address}
                    />

                    <CommunitySchedules
                      title="Missas"
                      schedules={[
                        { weekday: 'Quarta-feira', time: '19:30' },
                        { weekday: 'S??bado', time: '08:30' }
                      ]}
                    />

                    <HowToGet
                      mapsLink="https://www.google.com/maps/dir/?api=1&destination=Capela+S??o+Paulo+Ap??stolo,+R.+Mozart,+271+-+Jardim+Arco-Iris,+Diadema+-+SP,+09960-590"
                      ariaLabel="Abrir o aplicativo ou site Google Maps para visualizar as rotas para a comunidade S??o Paulo Ap??stolo"
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
                  aria-label="Ver informa????es da comunidade Nossa Senhora Aparecida"
                >
                  nossa senhora aparecida
                  <Image
                    src={Open}
                    alt="Ver informa????es"
                    aria-hidden
                  />
                </Accordion.Trigger>
                <Accordion.Content className={styles.section__communities__accordion__content}>
                  <div>
                    <Address
                      address="Rua Jo??o Batista Alves do Nascimento, 411. Vila Popular. Diadema - SP."
                      textClass={styles.section__communities__accordion__content__address}
                    />

                    <CommunitySchedules
                      title="missas"
                      schedules={[
                        { weekday: 'Quarta-feira', time: '19:30' },
                        { weekday: 'Domingo', time: '08:30' }
                      ]}
                    />

                    <HowToGet
                      mapsLink="https://www.google.com/maps/dir/?api=1&destination=Capela+Nossa+Senhora+Aparecida,+Vila+Popular+-+Rua+Jo??o+Batista+Alves+do+Nascimento,+411+-+Vila+Nogueira,+Diadema+-+SP,+09951-090"
                      ariaLabel="Abrir o aplicativo ou site Google Maps para visualizar as rotas para a comunidade S??o Paulo Ap??stolo"
                    />
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item
                value="santa rita de c??ssia"
                className={styles.section__communities__accordion}
              >
                <Accordion.Trigger
                  className={styles.section__communities__accordion__trigger}
                  aria-label="Ver informa????es da comunidade Santa Rita de C??ssia"
                >
                  santa rita de c??ssia
                  <Image
                    src={Open}
                    alt="Ver informa????es"
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
                      title="missas"
                      schedules={[
                        { weekday: 'Sexta-feira', time: '19:30' },
                        { weekday: 'Domingo', time: '17:00' }
                      ]}
                    />

                    <HowToGet
                      mapsLink="https://www.google.com/maps/dir/?api=1&destination=Comunidade+Santa+Rita+de+C??ssia,+R.+Dom+Marcos+Teixeira,+155+-+Jardim+Barrionuevo+(Vila+Nogueira),+Diadema+-+SP,+09960-360"
                      ariaLabel="Abrir o aplicativo ou site Google Maps para visualizar as rotas para a comunidade S??o Paulo Ap??stolo"
                    />
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item
                value="imaculada concei????o"
                className={styles.section__communities__accordion}
              >
                <Accordion.Trigger
                  className={styles.section__communities__accordion__trigger}
                  aria-label="Ver informa????es da comunidade Imaculada Concei????o"
                >
                  imaculada concei????o
                  <Image
                    src={Open}
                    alt="Ver informa????es"
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
                      title="missas"
                      schedules={[
                        { weekday: 'Sexta-feira', time: '19:30' },
                        { weekday: 'Domingo', time: '08:30' }
                      ]}
                    />

                    <HowToGet
                      mapsLink="https://www.google.com/maps/dir/?api=1&destination=Capela+Imaculada+Concei????o,+Goyotin,+R.+Isac+Aizemberg,+96,+Diadema+-+SP,+09951-225"
                      ariaLabel="Abrir o aplicativo ou site Google Maps para visualizar as rotas para a comunidade S??o Paulo Ap??stolo"
                    />
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </section>

        <aside className={styles.pastorals__wrapper} aria-labelledby="pastorals__wrapper__text">
          <Typography className={styles.pastorals__wrapper__text} id="pastorals__wrapper__text">
            ??? venha fazer parte das pastorais e movimentos da nossa comunidade ???
          </Typography>
        </aside>

        <div>
          <Card.Root className={`${styles.pastorals__card} ${styles.row}`}>
            <Card.Icon
              src={CatechismPastoral}
              alt="Catequese e crisma de jovens e adultos"
              className={`${styles.pastorals__card__image} ${styles['pastoral__cards--catechism']}`}
              loading="lazy"
            />
            <Typography className={styles.pastorals__card__text}>
              catequese
            </Typography>
          </Card.Root>

          <Card.Root
            className={`${styles.pastorals__card} ${styles['row-reverse']}`}
          >
            <Card.Icon
              src={WelcomedPastoral}
              alt="Pastoral da acolhida"
              className={`${styles.pastorals__card__image} ${styles['pastoral__cards--welcomed']}`}
              loading="lazy"
            />
            <Typography className={styles.pastorals__card__text}>
              acolhida
            </Typography>
          </Card.Root>

          <Card.Root className={`${styles.pastorals__card} ${styles.row}`}>
            <Card.Icon
              src={MusicPastoral}
              alt="Pastoral da m??sica"
              className={`${styles.pastorals__card__image} ${styles['pastoral__cards--music']}`}
              loading="lazy"
            />
            <Typography className={styles.pastorals__card__text}>
              m??sica
            </Typography>
          </Card.Root>

          <Card.Root className={`${styles.pastorals__card} ${styles['row-reverse']}`}>
            <Card.Icon
              src={EucharistPastoral}
              alt="Minist??rio da eucaristia"
              className={styles.pastorals__card__image}
              loading="lazy"
            />
            <Typography className={styles.pastorals__card__text}>
              eucaristia
            </Typography>
          </Card.Root>

          <Card.Root className={`${styles.pastorals__card} ${styles.row}`}>
            <Card.Icon
              src={LiturgyPastoral}
              alt="Liturgia"
              className={`${styles.pastorals__card__image} ${styles['pastoral__cards--liturgy']}`}
              loading="lazy"
            />
            <Typography className={styles.pastorals__card__text}>
              m??sica
            </Typography>
          </Card.Root>
        </div>
      </main>
      <footer className={styles.footer} id="contact">
        <div>
          <div className={styles.footer__address__container}>
            <Typography className={styles.footer__entityName}>
              par??quia menino jesus de praga
            </Typography>

            <address className={styles.footer__address}>
              <div>
                <Image
                  src={Location}
                  alt="Localiza????o"
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
            par??quia menino jesus de praga &copy;
            {' '}
            {new Date().getFullYear()}
            . All rights reserved
          </Typography>

          <Typography variant="span" id="developer-attribution">
            developed by
            {' '}
            <Link href="https://github.com/" aria-labelledby="developer-attribution">
              Alessandro Miranda
            </Link>
          </Typography>

          <Typography variant="span" id="images-attribution">
            images by
            {' '}
            <Link href="https://br.freepik.com/" aria-labelledby="images-attribution">
              freepik
            </Link>
          </Typography>
        </small>
      </footer>
    </>
  );
}
