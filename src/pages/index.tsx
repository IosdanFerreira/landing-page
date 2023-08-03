import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import styles from '@/styles/Home.module.scss';

// components
import LinkButtonPrimary from './components/LinkButtonPrimary';
import BenefitsCard from './components/BenefitsCard';
import ServicesCard from './components/ServicesCard';

// icons
import {FiUserCheck} from 'react-icons/fi';
import {AiOutlineCopyright} from 'react-icons/ai';
import {BsWhatsapp, BsInstagram, BsFacebook, BsEnvelopeAt} from 'react-icons/bs';
import Link from 'next/link';

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
              <div className="col-lg-6">
                  
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

        <section className={styles.section__potentiality}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className={styles.potentiality__content}>
                  <h2>Potencialize o seu Negócio com a Gestão de Tráfego</h2>

                  <p>Você já imaginou sua empresa decolando rumo ao sucesso absoluto? Com os serviços de gestão de tráfego pago, é possível alcançar esse objetivo de forma rápida e eficaz. Aumente sua visibilidade, atraia um público altamente qualificado e veja suas vendas dispararem!</p>

                  <LinkButtonPrimary url='/' text='Quero Aproveitar Os Benefícios Agora' />

                </div>
              </div>

              <div className="col-lg-6">

                <div className={styles.benefits_card__container}>
                  <BenefitsCard 
                    icon={<FiUserCheck />}
                    title='Mais Clientes, Mais Lucro:'
                    text='Atraia uma enxurrada de clientes em potencial para o seu negócio e aumente consideravelmente suas vendas.'
                  />
                  <BenefitsCard 
                    icon={<FiUserCheck />}
                    title='Segmentação Precisa:'
                    text='Direcione sua campanha para o público certo, evitando desperdício de recursos e alcançando melhores resultados.'
                  />
                  <BenefitsCard 
                    icon={<FiUserCheck />}
                    title='Retorno Sobre Investimento Garantido:'
                    text='Com a expertise do especialista, cada centavo investido em tráfego pago se transforma em lucro real.'
                  />
                  <BenefitsCard 
                    icon={<FiUserCheck />}
                    title='Estratégias Personalizadas:'
                    text='Conte com uma abordagem estratégica única para o seu negócio, adaptada às suas necessidades e metas específicas.'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section__solutions}>
          <div className="container">
            <div className="row">
              <div className="col-12">

                <div className={styles.solutions__content__title}>
                  <h2>Soluções para a sua Marca</h2>
                  <p>Amplie seu alcance como nossos serviços de alta performance!</p>
                </div>

                <div className={styles.solution__card__container}>
                  <ServicesCard 
                    title='Facebook Ads'
                    text='Atraia a atenção do seu público nas redes sociais mais populares do mundo.'
                    imgUrl='/images/cards/card-servico-facebook-ads-CTA (1).jpg'
                    linkUrl='/'
                  />
                  <ServicesCard 
                    title='Google Ads'
                    text=' Esteja presente nos resultados de busca mais relevantes para o seu segmento.'
                    imgUrl='/images/cards/card-servico-google-ads.jpg'
                    linkUrl='/'
                  />
                  <ServicesCard 
                    title='Google Meu Negócio'
                    text='Destaque-se no Google Maps e aumente a visibilidade local do seu negócio.'
                    imgUrl='/images/cards/card-servico-google-meu-negocio.jpg'
                    linkUrl='/'
                  />
                  <ServicesCard 
                    title='LinkedIn Ads'
                    text='Conecte-se com profissionais qualificados e amplie seu networking.'
                    imgUrl='/images/cards/card-servico-google-ads.jpg'
                    linkUrl='/'
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className={styles.section__expert}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                
                <div className={styles.expert__content}>
                  <h2>Agora é a sua vez de alcançar o sucesso!</h2>
                  <p>Você está <strong>a um passo de impulsionar o crescimento do seu negócio</strong> e dominar o mercado. Não deixe essa oportunidade escapar. Entre em contato e descubra como podemos transformar seus sonhos em realidade!</p>
                  <LinkButtonPrimary 
                    text='Quero Alavancar Meu Negócio Agora'
                    url='/'
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className={styles.section__contact}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                
                <div className={styles.contact__content}>
                  <h2>Agora é a sua vez de alcançar o sucesso!</h2>
                  <p>Você está <strong>a um passo de impulsionar o crescimento do seu negócio</strong> e dominar o mercado. Não deixe essa oportunidade escapar. Entre em contato e descubra como podemos transformar seus sonhos em realidade!</p>
                  <LinkButtonPrimary 
                    text='Quero Alavancar Meu Negócio Agora'
                    url='/'
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className={styles.social__container}>
                  <ul>
                    <li>
                      <Link href='/'>
                        <BsWhatsapp />
                      </Link>
                    </li>
                    <li>
                      <Link href='/'>
                        <BsInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link href='/'>
                        <BsFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link href='/'>
                        <BsEnvelopeAt />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.copy__container}>
                  <p>Copyright <AiOutlineCopyright /> Todos os direitos reservados </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.copy__container}>
                  <Link href='/'>Politicas de Privacidade </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
