import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './contact-form.module.scss';
import Input from '../../atoms/input/input';
import TextArea from '../../atoms/text-area/text-area';
import FilledButton from '../../atoms/filled-button/filled-button';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  return (
    <section className={style.contact}>
      <h1 className={style.title}>Fale com a gente</h1>
      <form className={style.form}>
        <div className={style.inputGroup}>
          <Input
            id="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
            placeholder="Nome"
          />
          <p className={style.error}>{errors.name}</p>
        </div>
        <div className={style.inputGroup}>
          <Input
            id="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="E-mail"
          />
          <p className={style.error}>{errors.email}</p>
        </div>
        <div className={style.inputGroup}>
          <Input
            id="subject"
            value={subject}
            onChange={({ target }) => setSubject(target.value)}
            placeholder="Assunto"
          />
          <p className={style.error}>{errors.subject}</p>
        </div>
        <div className={style.inputGroup}>
          <TextArea
            id="message"
            value={message}
            onChange={({ target }) => setMessage(target.value)}
          />
          <p className={style.error}>{errors.name}</p>
        </div>
        <div className={style.submitWrapper}>
          <FilledButton
            disabled
            type="submit"
            small
            onClick={() => {}}
          >
            Enviar
          </FilledButton>
        </div>
      </form>
    </section>
  );
}

ContactForm.propTypes = {

};

export default ContactForm;
