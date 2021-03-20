import React from 'react';
import PropTypes from 'prop-types';
import styles from './ida-logo.module.scss';

/**
 * Identidade Digital Ativista logo
 * @returns {React.Component} image component
 */
const IDALogo = ({ big }) => {
  const logoClasses = [styles.logo];

  // check if button is type big 
  if (big) logoClasses.push(styles.__big);
  
  return (
    <img
      data-testid="ida-logo"
      className={logoClasses.join(' ')}
      alt="Logo da Identidade Digital Ativista"
      src="/static/images/colorful-ida-logo.svg"
    />
  );
};

IDALogo.propTypes = {
  big: PropTypes.bool,
};

IDALogo.defaultProps = {
  big: false,
};

export default IDALogo;
