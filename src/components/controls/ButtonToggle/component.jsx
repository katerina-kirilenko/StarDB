import React, { Component } from "react";

import "./style.css";

class ButtonToggle extends Component {
  render() {
    return (
      <button
        className='btn btn-success btn-toggle'
        onClick={this.props.onClickToggle}
      >
        {this.props.value}
      </button>
    );
  }
}

export default ButtonToggle;
