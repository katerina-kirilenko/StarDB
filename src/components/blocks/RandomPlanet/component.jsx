import React, { Component } from 'react';

import SwapiService from '@/api/SwapiService';
import getPhoto from '@/api/PhotoService';
import Spinner from '@/components/blocks/Spinner';
import ErrorIndicator from '@/components/blocks/ErrorIndicator';
import PlanetView from '@/components/blocks/RandomPlanet/components/PlanetView';

import './style.css';
import noPhoto from '@/assets/no_photo.png';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    photo: "",
    loading: true,
    error: false,
  };

  componentDidMount() { 
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
    const id = Math.floor(Math.random() * 25) + 3;

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);

    this.updatePhoto(id);
  };

  async updatePhoto(id) {
    const response = await getPhoto('planets', id);
    const url = !response.ok ? noPhoto : response.url;

    this.setState({ photo: url });
  }

  render() {
    const { loading, error, planet, photo } = this.state;

    const hasData = !(loading || error);

    return (
      <div className="random-planet d-flex jumbotron rounded">
        {error && <ErrorIndicator />}
        {loading && <Spinner />}
        {hasData && <PlanetView planet={planet} photo={photo} />}
      </div>
    );
  }
}
