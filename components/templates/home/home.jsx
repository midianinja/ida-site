import React from 'react';
import IDALogo from '../../atoms/ida-logo/ida-logo';
import FilledButton from '../../atoms/filled-button/filled-button';
import OutlineButton from '../../atoms/outline-button/outline-button';
import style from './home.module.scss';

/**
 * home page, apresentation about IDa and some projects
 * @returns {React.Component} application
 */
const Home = () => (
  <div className={style.container}>
    <section className={style.cta}>

      <h1 className={style.title}>
        <IDALogo big />
        Sua conta segura para todas as lutas
      </h1>
      
      <p className={style.description}>
        Um cadastro único feito para  quem luta por um planeta mais justo, consciente e igualitário
      </p>
      
      <div className={style.actionWrapper}>
        <OutlineButton
          color="white"
          small
          onClick={() => {}}
        >
          Entrar
        </OutlineButton>
        <FilledButton
          color="white"
          small
          onClick={() => {}}
        >
          Cadastre-se
        </FilledButton>
      </div>

      <button
        type="button"
        className={style.moreButton}
        onClick={() => null}
      >
        <img
          className={style.moreIcon}
          src="/static/icons/double-arrow-down.svg"
          alt="Clique nessa imagem para saber mais sobre a IDa"
        />
      </button>
    </section>

    <section className={style.about}>
      <p className={style.text}>
        A IDa é um serviço de autenticação digital que conecta ativistas ao Banco de Tecnologias da Mídia NINJA.
      </p>

      <FilledButton
        color="white"
        small
        onClick={() => {}}
      >
        Cadastre-se
      </FilledButton>
    </section>
  </div>
);

export default Home;
