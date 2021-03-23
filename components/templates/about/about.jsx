import React from 'react';
import Header from '../../organisms/header/header';
import ContactForm from '../../organisms/contact-form/contact-form';
import Footer from '../../organisms/footer/footer';
import style from './about.module.scss';

const About = () => (
  <>
    <Header />
    <div className={style.container}>
      <section className={style.about}>
        <h1 className={style.title}>Quem somos</h1>
        <p className={style.paragraph}>
          A Identidade Digital Ativista é uma iniciativa da Mídia NINJA - Narrativas Independentes Jornalismo e Ação - uma rede de comunicação livre que busca novas formas de produção e distribuição de informação a partir das novas tecnologias e de uma lógica colaborativa de trabalho.
        </p>
        <p className={style.paragraph}>
          A NINJA entende a comunicação democrática como um direito humano e defendemos o interesse público, a diversidade cultural e o direito à informação visibilizando pautas de comunicação, causas identitárias, cultura, meio ambiente, juventude e outras que dialogam com os desafios do século XXI.
        </p>
        <p className={style.paragraph}>
          Hoje a rede engaja mais de 5 milhões de apoiadores e cerca de 500 pessoas diretamente envolvidas com o suporte de casas coletivas pelo Brasil.
        </p>
      </section>
      <ContactForm />
    </div>
    <Footer theme="white" />
  </>
);

export default About;
