import React, { Component } from "react";

import SwapiService from "@api/SwapiService";
import Spinner from "../Spinner";

import "./style.css";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then((peopleList) => {
      this.setState({
        peopleList,
      });
    });
  }

  renderItems(arr) {
    return arr.map(({id, personName}) => {
      return (
        <li
          className='list-group-item'
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {personName}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList);

    return (
      <ul className='item-list list-group'>
        {items}
      </ul>
    );
  }
}
