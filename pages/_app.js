import React from 'react';
import PropTypes from 'prop-types';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

MyApp.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.object.isRequired
};

export default MyApp;
