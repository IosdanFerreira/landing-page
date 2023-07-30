import Head from 'next/head';
import Image from 'next/image';
import { Inter, Montserrat } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import LinkButtonPrimary from './components/LinkButtonPrimary';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pedro Cabral - Gestão de Tráfego</title>
        <meta name="description" content="Gestão de Tráfego para seu negócio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={montserrat.className}>
        <section className={styles.section__hero}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                  
                <div className={styles.hero__content}>
                  <figure>
                    <Image src='/images/logo/logo lp gestor de trafego.png' fill alt='Logo' />
                  </figure>

                  <h1>Alcance Resultados <br />
                      Incríveis com Tráfego Pago!
                  </h1>

                  <p>Aumente suas Vendas, Atraia Clientes Qualificados e Domine o Mercado. Clique abaixo para falar conosco e começar a alcançar esses resultados!</p>

                  <LinkButtonPrimary url='/' text='Quero Alavancar Meu Negócio Agora' />
                </div>
                  
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
