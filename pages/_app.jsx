import React from 'react';
import PropTypes from 'prop-types';
import '../styles/globals.scss';
import '../styles/variables.scss';

/**
 * root application component
 * @param {React.Component} Component page to be render
 * @param {object} pageProps page properties
 * @returns {React.Component} application
 */
const RootComponent = ({ Component, pageProps }) => <Component {...pageProps} />;

// define react prototypes
RootComponent.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.object).isRequired
};

export default RootComponent;
