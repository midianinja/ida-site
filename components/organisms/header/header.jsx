import React from 'react';
import IDALogo from '../../atoms/ida-logo/ida-logo';
import FilledButton from '../../atoms/filled-button/filled-button';
import OutlineButton from '../../atoms/outline-button/outline-button';
import style from './header.module.scss';

/**
 * it is the default header to the pages
 * @returns {React.Component} default header
 */
const Header = () => (
  <header className={style.header}>
    <IDALogo />
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
  </header>
);

export default Header;
