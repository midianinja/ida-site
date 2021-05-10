import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { illustrations } from './background-illustrations.collection';
import style from './background-illustrations.module.scss';

/**
 * select of a random way illustrations to fill a section side 
 * @returns {array} it is contains objects to illustrations data
 */
const getRandomIllustration = () => {
  const randomIllustrations = [];
  const ilustrationsCopy = [...illustrations];
  const illustrationsAmountOptions = [2, 3];
  const randomOptionsIndex = (Math.ceil(Math.random() * illustrationsAmountOptions.length) || 1) - 1;
  const illustrationsAmount = illustrationsAmountOptions[randomOptionsIndex];

  // add the correct quantity of illustration
  for (let count = 0; count < illustrationsAmount; count += 1) {
    // generate random index
    const randomIllustrationIndex = (Math.ceil(Math.random() * ilustrationsCopy.length) || 1) - 1;

    // add random illustration of list
    randomIllustrations.push(ilustrationsCopy[randomIllustrationIndex]);

    // remove illustration of copy list not to have duplicated
    ilustrationsCopy.splice(randomIllustrationIndex, 1);
  }

  return randomIllustrations.map((illustration) => ({
    ...illustration,
    xVariant: Math.floor(Math.random() * 30),
    yVariant: Math.floor(Math.random() * 30)
  }));
};

/**
 * create initial background shape
 * @param {number} sectionsAmount section amount to be generate
 * @param {function} setShape function to set o component state the generetated shape 
 * @returns {array} it is contains each section of illustration to create the
 * background
 */
const setBackgroundShape = (sectionsAmount, setShape) => {
  const shape = [];

  for (let count = 0; count < sectionsAmount; count += 1) {
    // create a section that contain right and left side
    const section = {
      left: getRandomIllustration(),
      right: getRandomIllustration()
    };

    // add to section on the shape
    shape.push(section);
  }

  setShape(shape);
};

/**
 * render illustrations of a section
 * @param {object} data information about the illustrations
 * @returns {array} list of React Components
 */
const renderIllustrations = (data, left) => data.map(({
  id, src, blured, xVariant,
  yVariant,
}, index) => {
  const styles = [style.illustration];

  // check if is main illustration of the section to push the main style
  if (index === 0) styles.push(style.__main);

  // check if is a blured illustration to push the blured style
  if (blured) styles.push(style.__blured);

  const variantStyle = { top: `${yVariant}%` };

  if (left) variantStyle.left = `${xVariant}%`;
  else variantStyle.right = `${xVariant}%`;

  return (
    <img
      key={id}
      src={src}
      style={variantStyle}
      className={styles.join(' ')}
      alt=""
    />
  )
});

/**
 * map to shape to a react component list
 * @param {array} shape data list of illustration to be render
 * @returns {array} section list in React.Component
 */
const renderSections = (shape) => shape.map(({ left, right }) => (
  <div key={`${left.id}${right.id}`} className={style.sectionWrapper}>
    <div className={style.leftWrapper}>
      {renderIllustrations(left, true)}
    </div>
    <div className={style.rightWrapper}>
      {renderIllustrations(right, false)}
    </div>
  </div>
));

/**
 * random illustration to generate the page background
 * @returns {React.Component} background
 */
const BackgroundIllustration = ({ sectionsAmount }) => {
  const [shape, setShape] = useState(null);

  // initial cycle of component, mapping illustrations
  useLayoutEffect(() => {
    setBackgroundShape(sectionsAmount, setShape);
  }, []);

  if (!shape) return null;

  return (
    <div className={style.IDABackground}>
      {renderSections(shape)}
    </div>
  );
};

BackgroundIllustration.propTypes = {
  sectionsAmount: PropTypes.number
};

BackgroundIllustration.defaultProps = {
  sectionsAmount: 1
};

export default BackgroundIllustration;
