import React from 'react';
import style from './ida-importance.module.scss';
import { importances } from './ida-importance.collection';
import IDAImportanceCard from '../../molecules/ida-importance-card/ida-importance-card';

/**
 * render explanations cards about IDA
 * @returns {array} cards to be render
 */
const renderCards = () => importances.map(({ iconSrc, title, explanation }) => (
  <IDAImportanceCard
    data-testid="card"
    key={title}
    iconSrc={iconSrc}
    title={title}
    explanation={explanation}
  />
));

/**
 * ida importance explanations
 * @returns {React.Component} explanations
 */
const IDAImportance = () => (
  <section className={style.container}>
    <h2 className={style.title}>Por que a IDA importa?</h2>
    <div className={style.cardsWrapper}>
      { renderCards() }
    </div>
  </section>
);

export default IDAImportance;
