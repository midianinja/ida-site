import React from 'react';
import Header from '../../organisms/header/header';
import ContactForm from '../../organisms/contact-form/contact-form';
import Footer from '../../organisms/footer/footer';
import style from './contact.module.scss';

const About = () => (
  <>
    <Header />
    <div className={style.container}>
      <section className={style.contact}>
        <ContactForm />
      </section>
    </div>
    <Footer theme="white" />
  </>
);

export default About;
