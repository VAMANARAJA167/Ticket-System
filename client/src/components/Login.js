/** @format */

import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../Context';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        {
          username,
          password,
        }
      );
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(`Login Error: ${error.response.data.msg}`);
      } else {
        console.error('Login Error:', error.response.data.msg);
      }
    }
  };

  return (
    <div >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary m-2">
          Login
        </button>
        <Link to="/signup">
          <button className="btn btn-primary">Sign Up</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
