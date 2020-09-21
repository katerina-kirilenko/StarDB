import React from 'react';
import PropTypes from 'prop-types';

const PersonView = ({ person }) => {
  const { id, personName, gender, birthYear, eyeColor } = person;

  return (
    <>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={personName}
        className="person-image"
      />
      <div className="card-body">
        <h4>{personName}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender:</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year:</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color:</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

PersonView.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.string,
    personName: PropTypes.string,
    gender: PropTypes.string,
    birthYear: PropTypes.string,
    eyeColor: PropTypes.string,
  }).isRequired,
};

export default PersonView;
