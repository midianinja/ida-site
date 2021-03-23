import React from 'react';
import PropTypes from 'prop-types';
import style from './text-area.module.scss';

const TextArea = ({ value, onChange, id }) => (
  <textarea
    id={id}
    data-testid={id}
    onChange={onChange}
    className={style.textArea}
  >
    {value}
  </textarea>
);

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
