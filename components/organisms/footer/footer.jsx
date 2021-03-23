import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import style from './footer.module.scss';
import {
  siteMapLinks, socialLinks, makersLinks,
  themes,
} from './footer.collection';

/**
 * get content color by theme reference
 * @returns {string} footer theme
 */
const getContentColor = (theme) => theme === themes.WHITE ? 'dark' : 'white';

/**
 * render site map links of IDA
 * @returns {array} links to be render
 */
const renderSiteMapLinks = () => siteMapLinks.map(({ href, label }) => (
  <li className={style.item} key={href}>
    <Link href={href}>
      <a>{label}</a>
    </Link>
  </li>
));

/**
 * render social links of IDA
 * @returns {array} links to be render
 */
 const renderSocialsLink = ({ theme }) => socialLinks.map(({
   href, label, icon,
 }) => (
  <li className={style.item} key={href}>
    <a href={href}>
      <img
        src={icon[getContentColor(theme)]}
        alt={label}
      />
    </a>
  </li>
));

/**
 * render makers link of IDA
 * @returns {array} links to be render
 */
/**
 * render social links of IDA
 * @returns {array} links to be render
 */
 const renderMakersLinks = ({ theme }) => makersLinks.map(({
  href, label, icon,
}) => (
 <li className={style.item} key={href}>
    <a href={href}>
      <img
        src={icon[getContentColor(theme)]}
        alt={label}
        data-testid="maker-icon"
      />
    </a>
 </li>
));

/**
 * it is the default footer to the pages
 * @returns {React.Component} default header
 */
const Footer = ({ theme }) => {
  const footerClasses = [style.footer];
  const footerVariantes = {
    white: style.__white,
    purple: style.__purple,
    dark: style.__dark,
  };

  footerClasses.push(footerVariantes[theme]);

  const makersLinksWrapperClasses = [style.makers];
  const makersVariants = {
    white: style.__white,
    dark: style.__dark
  };

  makersLinksWrapperClasses
    .push(makersVariants[getContentColor(theme)])
  
  return (
    <footer className={footerClasses.join(' ')}>
      <div className={style.content}>
        <ul className={style.siteMap}>
          {renderSiteMapLinks()}
        </ul>
        <ul className={style.socials}>
          {renderSocialsLink({ theme })}
        </ul>
        <ul className={makersLinksWrapperClasses.join(' ')}>
          {renderMakersLinks({ theme })}
        </ul>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  theme: PropTypes.oneOf(['dark', 'white', 'puple']),  
};

Footer.defaultProps = {
  theme: 'dark',
};

export default Footer;
