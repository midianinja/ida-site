import React from 'react';
import PropTypes from 'prop-types';
import style from './outline-button.module.scss';

/**
 * it is the putline button
 * @param {string} children button content
 * @param {string} type button type, button or submit
 * @param {function} onClick function the run on click event
 * @param {boolean} disabled flag to manager click availability of button
 * @param {string} color tpye color of button
 * @returns {React.Component} default header
 */
const OutlineButton = ({
  children, type, onClick, disabled,
  color, small,
}) => {
  const buttonClasses = [style.button];
  const colorsClasses = {
    default: null,
    white: style.__white,
  };

  // should add class on buttonClass if have color ref
  if (colorsClasses[color]) buttonClasses.push(colorsClasses[color]);

  // should add small class if the button is small
  if (small) buttonClasses.push(style.__small);

  return (
    <button
      type={type}
      className={buttonClasses.join(' ')}
      onClick={onClick}
      disabled={disabled}
      data-testid="button"
    >
      {children}
    </button>
  ); 
};

// defining button types
const buttonTypes = ['submit', 'button'];

// define color types
const colorTypes = ['default', 'white'];

OutlineButton.propTypes = {
  color: PropTypes.oneOf(colorTypes),
  type: PropTypes.oneOf(buttonTypes),
  small: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

OutlineButton.defaultProps = {
  type: 'button',
  color: 'default',
  disabled: false,
  small: false,
};

export default OutlineButton;


