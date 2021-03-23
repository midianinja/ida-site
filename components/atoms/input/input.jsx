import React from 'react';
import PropTypes from 'prop-types';
import style from './input.module.scss';

const Input = ({
  value, placeholder, onChange, id,
}) => (
  <input
    id={id}
    data-testid={id}
    onChange={onChange}
    className={style.input}
    value={value}
    placeholder={placeholder}
  />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  placeholder: '',
};

export default Input;
