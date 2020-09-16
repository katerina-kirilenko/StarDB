import React, { Component } from "react";

import SwapiService from "@api/SwapiService";
import getPhoto from "@api/PhotoService";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

import "./style.css";
import noPhoto from "@assets/no_photo.png";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    photo: "",
    loading: true,
    error: false,
  };

  componentDidMount() {
    console.log("Did Mount");
    
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

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

  updatePlanet = () => {
    console.log("update");
    const id = Math.floor(Math.random() * 25) + 3;

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);

    this.updatePhoto(id);
  };

  async updatePhoto(id) {
    const response = await getPhoto("planets", id);
    let url = !response.ok ? noPhoto : response.url;

    this.setState({ photo: url });
  }

  render() {
    console.log("render");
    const { loading, error, spinner, planet, photo } = this.state;

    const hasData = !(loading || error);

    return (
      <div className='random-planet d-flex jumbotron rounded'>
        {error && <ErrorIndicator />}
        {spinner && <Spinner />}
        {hasData && <PlanetView planet={planet} photo={photo} />}
      </div>
    );
  }
}

const PlanetView = ({ planet, photo }) => {
  const { planetName, population, rotationPeriod, diameter } = planet;

  return (
    <>
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
    </>
  );
};
