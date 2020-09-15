import React, { Component } from "react";

import Header from "./blocks/Header";
import RandomPlanet from "./blocks/RandomPlanet";
import ItemList from "./blocks/ItemList";
import PersonDetails from "./blocks/PersonDetails";
import AppBackground from "./blocks/AppBackground";

import "./style.css";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <div className='app'>
          <Header />
          <RandomPlanet />
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
