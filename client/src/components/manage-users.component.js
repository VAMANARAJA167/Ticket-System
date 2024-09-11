import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import CreateUser from "./create-user.component";
import { ThemeContext } from '../Context';


const User = ({ user, deleteUser }) => {
   
    const {theme} = useContext(ThemeContext)

     return(
        <tr className={`${theme}`}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>
            <a href="#" onClick={() => { 
                if (window.confirm('Are you sure you want to delete this user?')) 
                    deleteUser(user._id);
            }} 
            className="badge badge-danger">Delete</a>
        </td>
    </tr>
     )
}
    
   


const ManageUsers = () => {
    const [users, setUsers] = useState([]);

    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('http://localhost:5000/users/');
                setUsers(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('http://localhost:5000/users/');
                setUsers(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUsers();
    }, [users]);

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`);
            setUsers(users.filter(user => user._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const getUsers = () => {
        return users.map(currentUser => (
            
            <User
                user={currentUser}
                deleteUser={deleteUser}
                key={currentUser._id}
            />
            
        ));
    };

    return (
        <div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {getUsers()}
                </tbody>
            </table>
            <br />
           
            <CreateUser />
           
        </div>
    );
};

export default ManageUsers;
