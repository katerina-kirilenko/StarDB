import React, { Component } from "react";

import "./style.css";

export default class PersonDetails extends Component {
  
  render() {
    return (
      <div className='person-details card'>
        <img
          src='https://starwars-visualguide.com/assets/img/characters/3.jpg'
          alt='R2-D2'
          className='person-image'
        />

        <div className='card-body'>
          <h4>R2-D2</h4>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <span className='term'>Birth Year:</span>
              <span>33BBY</span>
            </li>
            <li className='list-group-item'>
              <span className='term'>Species:</span> 
              <span>Droid</span>
              </li>
            <li className='list-group-item'>
              <span className='term'>Height:</span>
              <span>96cm</span></li>
            <li className='list-group-item'>
              <span className='term'>Mass:</span>
              <span>32kg</span></li>
          </ul>
        </div>
      </div>
    );
  }
}
