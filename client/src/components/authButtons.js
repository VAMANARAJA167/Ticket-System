/** @format */

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthButtons = () => {
  const [isAuthenticated, setIsAuthenticated] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleSignIn = () => {
    // navigate('/');
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/');
    setIsAuthenticated(false);
  };

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={handleSignOut} className="btn btn-danger">
          Sign Out
        </button>
      ) : (
        <button onClick={handleSignIn} className="btn btn-primary m-2">
          Sign In
        </button>
      )}
    </div>
  );
};

export default AuthButtons;
