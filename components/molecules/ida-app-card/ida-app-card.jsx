import React from 'react';
import PropTypes from 'prop-types';
import style from './ida-app-card.module.scss';

/**
 * function that redirect to url defined
 * @param {string} url application url to be redirec
 */
const handleClick = (url) => {
  window.location.replace(url);
};

/**
 * IDA explanation card, contains icon, title and a short explanation
 * @param {string} url application url
 * @param {string} title application title
 * @param {string} imageSrc app image url
 * @returns {React.Component} formatted card
 */
const IDAAppCard = ({ url, title, imageSrc }) => (
  <div className={style.card} onClick={() => handleClick(url)}>
    <img
      data-testid="image"
      className={style.circularImage}
      src={imageSrc}
      alt={title}
    />
    <h3 className={style.title}>{title}</h3>
  </div>
);

IDAAppCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired, 
};

export default IDAAppCard;
