import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from './assets/planet.png';

const App = () => (
  <>
    <header>
      <nav>
        <div className="logo">
          {' '}
          <span className="icon-button">
            <img src={logo} alt="logo" style={{ width: '3.5em', height: '3.5em' }} />
          </span>
          <span className="nav-brand">
            Space Travelers&apos; Hub
          </span>
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/">Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/missions">Missions</NavLink>
          </li>
          |
          <li>
            <NavLink to="/profile">My Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <main className="container">
      <Outlet />
    </main>
  </>
);

export default App;
