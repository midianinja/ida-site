import React from 'react';
import IDALogo from '../../atoms/ida-logo/ida-logo';
import FilledButton from '../../atoms/filled-button/filled-button';
import OutlineButton from '../../atoms/outline-button/outline-button';
import IDAImportance from '../../organisms/ida-importance/ida-importance';
import IDAApps from '../../organisms/ida-apps/ida-apps';
import Footer from '../../organisms/footer/footer';
import style from './home.module.scss';

/**
 * home page, apresentation about IDa and some projects
 * @returns {React.Component} application
 */
const Home = () => (
  <div className={style.container}>
    <section className={style.cta}>
      <div>
        <IDALogo big />
      </div>
      
      <div className={style.contentWrapper}>
        <h1 className={style.title}>
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
      <div className={style.connectWithWrapper}>
        <h2 className={style.title}>Com a IDa você</h2>
        <OutlineButton
          color="white"
          small
          onClick={() => {}}
        >
          SE CONECTA
        </OutlineButton>
      </div>

      <p className={style.text}>
        A IDa é um serviço de autenticação digital que conecta ativistas ao Banco de Tecnologias da Mídia NINJA.
      </p>

      <div className={style.actionWrapper}>
        <FilledButton
          color="white"
          small
          onClick={() => {}}
        >
          Cadastre-se
        </FilledButton>
      </div>
    </section>

    <IDAImportance />

    <IDAApps />

    <Footer />
  </div>
);

export default Home;
