/** @format */

import React, { useContext } from 'react';
import AuthButtons from './authButtons';
import { ThemeContext } from '../Context';
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const user = JSON.parse(localStorage.getItem('currentUser'));

  function logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userName');
    localStorage.removeItem('token');
    window.location.href = '/';
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info">
        <h4 className="navbar-brand ml-5 text-light">Ticket System Master</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fa fa-bars" style={{ color: 'white' }}></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button onClick={toggleTheme} className="mr-3">
                {theme === 'light' ? 'Dark' : 'Light'}
              </button>
            </li>

            <li className="nav-item">
              <AuthButtons />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
