/** @format */

import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import Ticket from './ticket-display';
import { ThemeContext } from '../Context';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const {theme} = useContext(ThemeContext)
  useEffect(() => {
    axios
      .get('http://localhost:5000/tickets/')
      .then((res) => {
        setTickets(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const isAuthorized = () => {
    const token = localStorage.getItem('token');
    return !!token; // Check if the token exists
  };

  const deleteTicket = (id) => {
    if (isAuthorized()) {
      const token = localStorage.getItem('token');
      axios
        .delete(`http://localhost:5000/tickets/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data);
          setTickets(tickets.filter((ticket) => ticket._id !== id));
        })
        .catch((error) => console.log(error));
    } else {
      alert('You are not authorized to delete this ticket.');
    }
  };

  const getOpenList = () => {
    return tickets.map((currentTicket) => {
      if (currentTicket.status !== 'Resolved') {
        return (
          <Ticket
            key={currentTicket._id}
            ticket={currentTicket}
            deleteTicket={deleteTicket}
          />
        );
      }
      return null;
    });
  };

  const getResolvedList = () => {
    return tickets.map((currentTicket) => {
      if (currentTicket.status === 'Resolved') {
        return (
          <Ticket
            key={currentTicket._id}
            ticket={currentTicket}
            deleteTicket={deleteTicket}
          />
        );
      }
      return null;
    });
  };

  return (
    <div>
      <br />
      <h3>Open Tickets</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Project</th>
            <th>Assigned To</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className={`${theme}`}>{getOpenList()}</tbody>
      </table>
      <br />
      <h3>Resolved Tickets</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Project</th>
            <th>Assigned To</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody  className={`${theme}`}>{getResolvedList()}</tbody>
      </table>
    </div>
  );
};

export default TicketList;
