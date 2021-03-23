import React from 'react';
import BaseHead from '../../components/base-head/base-head';
import Contact from '../../components/templates/contact/contact';

/**
 * about page, apresentation text about IDA
 * @returns {React.Component} application
 */
const AboutPage = () => (
  <>
    <BaseHead title="Fale conosco" />
    <Contact />
    <div data-testid="contact-page" />
  </>
);

export default AboutPage;
