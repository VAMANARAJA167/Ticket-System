import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import CreateProject from "./create-project.component";
import { ThemeContext } from '../Context';

const Project = ({ project, deleteProject }) => {
    
    const {theme} = useContext(ThemeContext)

     return(
        
            <tr className={`${theme}`}>
                <td>{project.name}</td>
                <td>
                    <a href="#" onClick={() => {
                        if (window.confirm('Are you sure you want to delete this project?'))
                            deleteProject(project._id)
                    }} className="badge badge-danger">Delete</a>
                </td>
            </tr>
        );
     
}

const ManageProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get('http://localhost:5000/projects/');
                setProjects(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProjects();
    }, []);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get('http://localhost:5000/projects/');
                setProjects(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProjects();
    }, [projects]);

    const deleteProject = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/projects/${id}`);
            setProjects(projects.filter(project => project._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const getProjects = () => {
        return projects.map(currentProject => {
            return <Project
                project={currentProject}
                deleteProject={deleteProject}
                key={currentProject._id}
            />;
        });
    };

    return (
        <div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody >
                    {getProjects()}
                </tbody>
            </table>
            <br />
            <CreateProject />
        </div>
    );
};

export default ManageProjects;
