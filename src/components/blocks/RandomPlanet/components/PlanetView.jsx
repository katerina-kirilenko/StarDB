import React from 'react';
import PropTypes from 'prop-types';

const PlanetView = ({ planet, photo }) => {
  const { planetName, population, rotationPeriod, diameter } = planet;

  return (
    <>
      <div className="image-wrap">
        <img className="planet-image" src={photo} alt={planetName} />
      </div>
      <div className="planet-description">
        <h4>{planetName}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population:</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period:</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter:</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

PlanetView.propTypes = {
  planet: PropTypes.shape({
    planetName: PropTypes.string,
    population: PropTypes.string,
    rotationPeriod: PropTypes.string,
    diameter: PropTypes.string,
  }).isRequired,
  photo: PropTypes.string.isRequired,
};

export default PlanetView;
