import React from 'react';
import BaseHead from '../../components/base-head/base-head';
import About from '../../components/templates/about/about';

/**
 * about page, apresentation text about IDA
 * @returns {React.Component} application
 */
const AboutPage = () => (
  <>
    <BaseHead title="Quem somos" />
    <About />
    <div data-testid="about-page" />
  </>
);

export default AboutPage;
