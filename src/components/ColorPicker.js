import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.module.css';

function LabeledSlider({ label, value, setValue }) {
  return (
    <div>
      <div className={styles.colorLabel}>{label}</div>
      <input
        type="range"
        min="0"
        max="255"
        value={value}
        onChange={(event) => {
          setValue(parseInt(event.target.value, 10));
        }}
      />
      <span>{value}</span>
    </div>
  );
}

LabeledSlider.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};

function ColorPicker() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const color = { background: `rgb(${red}, ${green}, ${blue})` };
  return (
    <div>
      <div className={styles.colorSwatch} style={color}></div>
      <LabeledSlider label="red" value={red} setValue={setRed} />
      <LabeledSlider label="green" value={green} setValue={setGreen} />
      <LabeledSlider value={blue} setValue={setBlue} />
    </div>
  );
}

export default ColorPicker;
