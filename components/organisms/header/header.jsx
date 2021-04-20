import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import IDALogo from '../../atoms/ida-logo/ida-logo';
import FilledButton from '../../atoms/filled-button/filled-button';
import OutlineButton from '../../atoms/outline-button/outline-button';
import style from './header.module.scss';

/**
 * it is the default header to the pages
 * @param {string} onSignin it runs when have signin click
 * @param {string} onSignup it runs when have signup click
 * @returns {React.Component} default header
 */
const Header = ({ onSignin, onSignup }) => (
  <header className={style.header}>
    <Link href="/">
      <a href="/">
        <IDALogo />
      </a>
    </Link>
    <div className={style.actionWrapper}>
      <OutlineButton
        color="white"
        small
        onClick={onSignin}
      >
        Entrar
      </OutlineButton>
      <FilledButton
        color="white"
        small
        onClick={onSignup}
      >
        Cadastre-se
      </FilledButton>
    </div>
  </header>
);

Header.propTypes = {
  onSignin: PropTypes.func.isRequired,
  onSignup: PropTypes.func.isRequired,
};

export default Header;
