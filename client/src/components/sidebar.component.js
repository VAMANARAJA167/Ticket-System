/** @format */

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { ThemeContext } from '../Context';

const Sidebar = () => {

   const {theme} = useContext(ThemeContext)
   console.log("side",theme)
  return (
    <nav className={`sidebar ${theme}`}>
      <div className="d-flex justify-content-between align-items-center p-3">
        <img
          src={logo}
          className="navbar-brand"
          width="120"
          alt="Tech support"
        />
        <button
          className="navbar-toggler d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse d-md-block" id="sidebarMenu">
        <ul className= "nav flex-column" >
          <li className="nav-item mb-3">
            <Link
              to="/dashboard"
              exact
              className={`${theme}`}
              activeClassName="active"
            >
              <i className="fas fa-home"></i>
              Dashboard Home
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link
              to="/tickets/create"
              className={`${theme}`}
              activeClassName="active"
            >
              <i className="fas fa-ticket-alt"></i>
              Create a Ticket
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link
              to="/manage-users"
              className={`${theme}`}
              activeClassName="active"
            >
              <i className="fas fa-users"></i>
              Manage Users
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link
              to="/manage-projects"
              className={`${theme}`}
              activeClassName="active"
            >
              <i className="fas fa-folder"></i>
              Manage Projects
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link
              to="/tickets-list"
              className={`${theme}`}
              activeClassName="active"
            >
              <i className="fas fa-folder"></i>
              Tickets List
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';

// const Sidebar = () => {
//     return (
//         <nav className="col-md-2 d-none d-md-block bg-light sidebar">
//             <center><img src={logo} className="navbar-brand" width="120" alt="Tech support" /></center>
//             <ul className="nav flex-column">
//                 <li className="nav-item mb-3">
//                     <Link to="/dashboard" exact className={`${theme}`} activeClassName="active">
//                         <i className="fas fa-home"></i>
//                         Dashboard Home
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/tickets/create" className={`${theme}`} activeClassName="active">
//                         <i className="fas fa-ticket-alt"></i>
//                         Submit a Ticket
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/manage-users" className={`${theme}`} activeClassName="active">
//                         <i className="fas fa-users"></i>
//                         Manage Users
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/manage-projects" className={`${theme}`} activeClassName="active">
//                         <i className="fas fa-folder"></i>
//                         Manage Projects
//                     </Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// }

// export default Sidebar;
