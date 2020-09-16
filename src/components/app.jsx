import React, { Component } from "react";

import Header from "./blocks/Header";
import RandomPlanet from "./blocks/RandomPlanet";
import ItemList from "./blocks/ItemList";
import PersonDetails from "./blocks/PersonDetails";
import AppBackground from "./blocks/AppBackground";
import ButtonToggle from "./controls/ButtonToggle";

import "./style.css";

class App extends Component {
  state = {
    randomPlanetIsOpen: true,
  };

  handleClickToggle = () => {
    this.setState((state) => {
      return {
        randomPlanetIsOpen: !this.state.randomPlanetIsOpen,
      };
    });
  };

  render() {
    return (
      <>
        <div className='app'>
          <Header />
          {this.state.randomPlanetIsOpen && <RandomPlanet />}
          <ButtonToggle
            value='Toggle Random Planet'
            onClickToggle={this.handleClickToggle}
          />
          <div className='row mb2'>
            <div className='col-md-6'>
              <ItemList />
            </div>
            <div className='col-md-6'>
              <PersonDetails />
            </div>
          </div>
        </div>
        <AppBackground />
      </>
    );
  }
}

export default App;
