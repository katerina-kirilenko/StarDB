import React, { Component } from "react";

import SwapiService from "../../../api/SwapiService";
import getPhoto from "../../../api/PhotoService";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

import "./style.css";
import noPhoto from "../../../assets/no_photo.png";


export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    photo: '',
    loading: true,
    error: false,
  };

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);

    this.updatePhoto(id);
  }

  async updatePhoto(id) {
    const response = await getPhoto("planets", id);
    let url = !response.ok ? noPhoto : response.url;

    this.setState({ photo: url });
  }

  constructor() {
    super();
    this.updatePlanet();
  }

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} photo={this.state.photo}/> : null;

    return (
      <div className='random-planet d-flex jumbotron rounded'>
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet, photo }) => {
  const { planetName, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <div className='image-wrap'>
        <img className='planet-image' src={photo} alt={planetName} />
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
    </React.Fragment>
  );
};
