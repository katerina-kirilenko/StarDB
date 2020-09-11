import React, { Component } from "react";

import "./random-planet.css";

export default class RandomPlanet extends Component {

  render() {
    return (
      <div className='random-planet d-flex jumbotron'>
        <div className='image-wrap'>
          <img
            className='planet-image'
            src='https://starwars-visualguide.com/assets/img/planets/5.jpg'
            alt='Dagobah'
          />
        </div>
        <div className='planet-description'>
          <h4>Planet Name</h4>
          <ul className='list-group'>
            <li >Population: 1 000 000</li>
            <li>Rotation Period: 23 days </li>
            <li>Diameter: 8,900km</li>            
          </ul>
        </div>
      </div>
    );
  }
}
