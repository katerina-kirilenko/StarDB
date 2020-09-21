import React, { Component } from 'react';

import Header from '@/components/blocks/Header';
import RandomPlanet from '@/components/blocks/RandomPlanet';
import ItemList from '@/components/blocks/ItemList';
import PersonDetails from '@/components/blocks/PersonDetails';
import AppBackground from '@/components/blocks/AppBackground';
import ButtonToggle from '@/components/controls/ButtonToggle';

import './style.css';

class App extends Component {
  state = {
    randomPlanetIsOpen: true,
    selectedPerson: '1',
    hasError: false,
  };

  handleClickToggle = () => {
    this.setState((state) => {
      return {
        randomPlanetIsOpen: !this.state.randomPlanetIsOpen,
      };
    });
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    return (
      <>
        <div className="app">
          <Header />
          {this.state.randomPlanetIsOpen && <RandomPlanet />}
          <ButtonToggle value="Toggle Random Planet" onClickToggle={this.handleClickToggle} />
          <div className="row mb2">
            <div className="col-md-6">
              <ItemList onItemSelected={this.onPersonSelected} />
            </div>
            <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson} />
            </div>
          </div>
        </div>
        <AppBackground />
      </>
    );
  }
}

export default App;
