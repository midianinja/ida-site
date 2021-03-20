import React from 'react';
import PropTypes from 'prop-types';
import style from './ida-importance-card.module.scss';

/**
 * IDA explanation card, contains icon, title and a short explanation
 * @param {string} iconSrc icon local url
 * @param {string} title explanation title
 * @param {string} explanation short text about title subject
 * @returns {React.Component} formatted card
 */
const IDAImportanceCard = ({ iconSrc, title, explanation }) => (
  <div className={style.card}>
    <img data-testid="icon-src" className={style.icon} src={iconSrc} alt="" />
    <h3 className={style.title}>{title}</h3>
    <p className={style.explanation}>{explanation}</p>
  </div>
);

IDAImportanceCard.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
};

export default IDAImportanceCard;

