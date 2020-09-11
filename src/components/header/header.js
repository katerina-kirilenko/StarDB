import React from "react";

import "./header.css";

const Header = () => {
  return (
    <div className='header d-flex'>
      <h3>
        <a href="#">Star DB</a>
      </h3>
      <nav>
        <ul className='d-flex'>
          <li>
            <a>People</a>
          </li>
          <li>
            <a>Planets</a></li>
          <li>
            <a>Starships</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
