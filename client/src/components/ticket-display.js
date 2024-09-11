import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MarkButton from './mark-button';



const Ticket = (props) => {

   
    const [ticketState, setTicketState] = useState({
        title: '',
        description: '',
        projectName: '',
        assignee: '',
        priority: '',
        status: '',
        type: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:5000/tickets/${props.ticket._id}`)
            .then(res => {
                setTicketState({
                    title: res.data.title,
                    description: res.data.description,
                    projectName: res.data.projectName,
                    assignee: res.data.assignee,
                    priority: res.data.priority,
                    status: res.data.status,
                    type: res.data.type
                });
            })
            .catch(error => console.log(error));
    }, [props.ticket._id]);

    const getPriorities = (lvl) => {
        switch (lvl) {
            case 'Low':
                return <td className="low-priority">{lvl}</td>;
            case 'Medium':
                return <td className="med-priority">{lvl}</td>;
            case 'High':
                return <td className="high-priority">{lvl}</td>;
            default:
                return <td>{lvl}</td>;
        }
    }

    const deleteTicket = (id) => {
        if (window.confirm('Are you sure you want to delete this ticket?')) {
            props.deleteTicket(id);
        }
    }

    return (
        <tr >
            <td>{ticketState.title}</td>
            <td>{ticketState.description}</td>
            <td>{ticketState.projectName}</td>
            <td>{ticketState.assignee}</td>
            {getPriorities(ticketState.priority)}
            <td>{ticketState.status}</td>
            <td>{ticketState.type}</td>
            <td>
                <Link to={`/edit/${props.ticket._id}`} className="badge badge-info">Edit</Link>
                <br />
                <a href="#" onClick={() => deleteTicket(props.ticket._id)} className="badge badge-danger">Delete</a>
                <br />
                <MarkButton mark={ticketState.status} ticketID={props.ticket._id} />
            </td>
        </tr>
    );
}

export default Ticket;
