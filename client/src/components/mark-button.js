import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MarkButton = ({ _id }) => {
    const [ticket, setTicket] = useState({
        title: '',
        description: '',
        projectName: '',
        assignee: '',
        priority: '',
        status: '',
        type: ''
    });

    const [users, setUsers] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ticketRes = await axios.get(`http://localhost:5000/tickets/${_id}`);
                setTicket(ticketRes.data);

                const usersRes = await axios.get('http://localhost:5000/users/');
                if (usersRes.data.length > 0) {
                    setUsers(usersRes.data.map(user => user.name));
                }

                const projectsRes = await axios.get('http://localhost:5000/projects/');
                if (projectsRes.data.length > 0) {
                    setProjects(projectsRes.data.map(project => project.name));
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [_id]);

    const handleClick = async (e) => {
        e.preventDefault();

        const updatedStatus = ticket.status !== 'Resolved' ? 'Resolved' : 'Open';
        setTicket({ ...ticket, status: updatedStatus });

        const updatedTicket = {
            ...ticket,
            status: updatedStatus
        };

        try {
            await axios.post(`http://localhost:5000/tickets/update/${_id}`, updatedTicket);
            console.log('Successfully updated.');
        } catch (error) {
            console.log(error);
        }

        alert('Successfully updated.');
    };

    return (
        <a href="#" onClick={handleClick} 
            className={`badge ${ticket.status !== 'Resolved' ? 'badge-success' : 'badge-secondary'}`}>
            {ticket.status !== 'Resolved' ? 'Mark as Resolved' : 'Mark as Open'}
        </a>
    );
};

export default MarkButton;
