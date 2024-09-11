/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Context from './Context';

ReactDOM.render(
  <Router>
    <Context>
    <App />
    </Context>
  </Router>,
  document.getElementById('root')
);
