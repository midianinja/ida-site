import React from 'react';
import FilledButton from '../../atoms/filled-button/filled-button';
import IDAAppCard from '../../molecules/ida-app-card/ida-app-card';
import { apps } from './ida-apps.dummies';
import style from './ida-apps.module.scss';

/**
 * render cards about the apps registered on IDA
 * @returns {array} cards to be render
 */
const renderCards = () => apps.map(({
  image, name, url, id,
}) => (
  <IDAAppCard
    key={id}
    imageSrc={image}
    title={name}
    url={url}
  />
));

/**
 * list with ida apps
 * @returns {React.Component} a section that contains a card list 
 */
const IDAApps = () => (
  <section className={style.container}>
    <div className={style.contentWrapper}>
      <h2 data-testid="title" className={style.title}>Onde você já pode usar o IDA?</h2>
      <div className={style.cardsWrapper}>
        { renderCards() }
      </div>
      <div className={style.moreWrapper}>
        <img className={style.moreIcon} src="/static/icons/more.svg" alt="" />
        <p className={style.moreText}>
          Mais sites parceiros em breve, aguarde!
        </p>
      </div>
      <div className={style.buttonWrapper}>
        <FilledButton
          small
          onClick={() => {}}
        >
          Cadastre-se
        </FilledButton>
      </div>
    </div>
  </section>
);

export default IDAApps;
