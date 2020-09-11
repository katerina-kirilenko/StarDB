import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";

import "./random-planet.css";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
  };

  onPlanetLoaded = (planet) => {
    this.setState({ planet });
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;
    
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded);
  }

  constructor() {
    super();
    this.updatePlanet();
  }

  render() {
    const {
      planet: { id, planetName, population, rotationPeriod, diameter },
    } = this.state;
    const photo = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    const noPhoto = "../../img/no_photo.png";

    return (
      <div className='random-planet d-flex jumbotron rounded'>
        <div className='image-wrap'>
          <img
            className='planet-image'
            src={photo}
            alt={planetName}
          />
        </div>
        <div className='planet-description'>
          <h4>{planetName}</h4>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <span className='term'>Population:</span>
              <span>{population}</span>
            </li>
            <li className='list-group-item'>
              <span className='term'>Rotation Period:</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className='list-group-item'>
              <span className='term'>Diameter:</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
