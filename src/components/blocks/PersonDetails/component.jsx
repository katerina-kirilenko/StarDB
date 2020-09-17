import React, { Component } from "react";

import SwapiService from "@api/SwapiService";
import Spinner from "../Spinner";

import "./style.css";

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;

    if (!personId) return;

    this.swapiService
      .getPerson(personId)
      .then((person) => {
      this.setState({ person });
    });
  }

  render() {
    const { person } = this.state;

    if (!person) return <Spinner />;    

    return (
      <div className="person-details card">
        <PersonView person={person} />
      </div>
    );
  }
}

const PersonView = ({ person }) => {
  const { id, personName, gender, birthYear, eyeColor } = person;

  return (
    <>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={personName}
        className='person-image'
      />
      <div className='card-body'>
        <h4>{personName}</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Gender:</span>
            <span>{gender}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Birth Year:</span>
            <span>{birthYear}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Eye Color:</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
