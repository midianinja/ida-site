import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

/**
 * this build a head component that contain SEO and analytics informations of the page
 * @param {string} title paǵe title
 * @returns {React.Component} head component
 */
const BaseHead = ({ title }) => (
  <Head>
    <title data-testid="title">{title} | Identidade Digital Ativista</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

BaseHead.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BaseHead;
