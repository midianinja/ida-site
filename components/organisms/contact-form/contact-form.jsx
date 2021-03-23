import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './contact-form.module.scss';
import Input from '../../atoms/input/input';
import TextArea from '../../atoms/text-area/text-area';
import FilledButton from '../../atoms/filled-button/filled-button';

/**
 * function to validate if the form data is valid to submit
 * @param {object} data  form data
 * @returns {object} contains if has error or not, with the error messages if
 */
const validate = () => ({ valid: true, errors: [] });

/**
 * function start when submit event is invocated 
 * @param {object} data form data
 * @param {function} onSubmit callback past by component params  
 */
const handleSubmit = ({ data, onSubmit }) => {
  const { valid } = valid(data);
  if (!valid) return;

  onSubmit(data);
};

/**
 * form to get contact with the IDA Collective
 * @param {funciton} onSubmit function invocate when has submit event and the form data
 * was valid
 * @returns {React.Component} form
 */
const ContactForm = ({ onSubmit }) => {
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
            onClick={() => handleSubmit({
              data: {
                name, subject, email, message,
              },
              onSubmit,
            })}
          >
            Enviar
          </FilledButton>
        </div>
      </form>
    </section>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
