import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/planet.png';

const Header = () => {
  const location = useLocation();
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      text: 'My Profile',
    },
  ];
  const updateLink = (index) => {
    links[index] = { ...links[index], active: true };
  };
  return (
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
        {links.map((link, index) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active-link' : ''}`}
              onClick={updateLink(index)}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
