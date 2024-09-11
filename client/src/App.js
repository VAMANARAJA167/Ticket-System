/** @format */

import React, { useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import Navbar from './components/navbar.component';
import Sidebar from './components/sidebar.component';
import Dashboard from './components/dashboard.component';
import CreateTicket from './components/create-ticket.component';
import CreateUser from './components/create-user.component';
import ManageUsers from './components/manage-users.component';
import ManageProjects from './components/manage-projects.component';
import EditTicket from './components/edit-ticket.component';
import TicketList from './components/ticket-list.component';
import Login from './components/Login';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import { ThemeContext } from './Context';

const App = () => {
  
  const {theme} = useContext(ThemeContext)
  return (
    <div className="app">
    

      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <div id="content" className={`${theme}`}>
          
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/tickets/create"
              element={
                <ProtectedRoute>
                  <CreateTicket />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manage-users"
              element={
                <ProtectedRoute>
                  <ManageUsers />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users/create"
              element={
                <ProtectedRoute>
                  <CreateUser />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manage-projects"
              element={
                <ProtectedRoute>
                  <ManageProjects />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <ProtectedRoute>
                  <EditTicket />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tickets-list"
              element={
                <ProtectedRoute>
                  <TicketList />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
