import React, { useState, useEffect } from 'react';
import axios from 'axios';

const roles = ['Admin', 'Project Manager', 'Developer', 'Other'];

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState(roles[0]);

    useEffect(() => {
        // set default values for state properties
        setRole(roles[0]);
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const user = {
            name,
            email,
            role
        };

        console.log(user);

        axios.post('http://localhost:5000/users/create', user)
            .then(res => console.log(res.data));

        // clear form
        setName('');
        setEmail('');
        setRole(roles[0]);
    };

    return (
        <div>
            <h3>Create New User</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Name: </label>
                    <input type="text"
                           className="form-control"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="email"
                           className="form-control"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Role: </label>
                    <select className="form-control"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}>
                            {
                                roles.map((role) => {
                                    return <option key={role}
                                                   value={role}>{role}
                                           </option>;
                                })
                            }
                    </select>
                </div>
                <div className="form-group">
                    <input type="submit"
                           value="Create User"
                           className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateUser;
