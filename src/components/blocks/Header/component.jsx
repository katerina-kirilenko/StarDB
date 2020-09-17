import React from "react";

import "./style.css";

const Header = () => {
  return (
    <div className='header d-flex'>
      <h3 className='logo'>
        <a href='/' className='link'>
          Star DB
        </a>
      </h3>
      <nav className='navigation'>
        <ul className='d-flex'>
          <li>
            <a href='/' className='link'>
              People
            </a>
          </li>
          <li>
            <a href='/' className='link'>
              Planets
            </a>
          </li>
          <li>
            <a href='/' className='link'>
              Starships
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
