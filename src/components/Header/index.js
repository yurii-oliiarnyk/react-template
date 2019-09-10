import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Header = props => {
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
