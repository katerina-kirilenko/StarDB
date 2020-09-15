import React from "react";

import "./style.css";

const Header = () => {
  return (
    <div className='header d-flex'>
      <h3>
        <a href='#'>Star DB</a>
      </h3>
      <nav>
        <ul className='d-flex'>
          <li>
            <a href='#'>People</a>
          </li>
          <li>
            <a href='#'>Planets</a>
          </li>
          <li>
            <a href='#'>Starships</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
