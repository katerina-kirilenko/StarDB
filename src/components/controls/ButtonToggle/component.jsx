import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ButtonToggle = ({ value, onClickToggle }) => {
  return (
    <button type="button" className="btn btn-success btn-toggle" onClick={onClickToggle}>
      {value}
    </button>
  );
};

ButtonToggle.propTypes = {
  value: PropTypes.string.isRequired,
  onClickToggle: PropTypes.func.isRequired,
};

export default ButtonToggle;
