import React from 'react';
import BaseHead from '../components/base-head/base-head';
import Home from '../components/templates/home/home';

/**
 * home page, apresentation about IDa and some projects
 * @returns {React.Component} application
 */
const HomePage = () => (
  <>
    <BaseHead title="Página inicial" />
    <Home />
    <div data-testid="ida" />
  </>
);

export default HomePage;
