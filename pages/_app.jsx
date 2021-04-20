/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import { StoreProvider } from '../store/Store';
import Main from '../components/main/main';
import '../styles/globals.scss';
import '../styles/variables.scss';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <StoreProvider>
        <Main>
          <Component {...pageProps} />
        </Main>
      </StoreProvider>
    );
  }
}
