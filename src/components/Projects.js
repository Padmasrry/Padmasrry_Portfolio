import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Autism Diagnosis Using ML",
            description: "Developed a machine learning model for early autism detection using SVM and ANN models. The dataset, sourced from GitHub, includes behavioral data for both children and adults. The SVM model achieved an accuracy of 97%. Tools used: Python, TensorFlow, Scikit-learn, and Streamlit.",
            icon: "fa-brain"
        },
        {
            title: "E-commerce Website",
            description: "Designed and developed a full-stack e-commerce platform with dynamic UI and secure payment integration. Built with React, Node.js, Express, and MongoDB, ensuring scalability and security.",
            icon: "fa-shopping-cart"
        },
        {
            title: "Portfolio Website",
            description: "Built a personal portfolio showcasing projects, skills, and experience with an interactive design. Implemented using HTML, CSS, JavaScript, and Bootstrap to ensure responsiveness and a modern UI.By using the React app i build this portfolio",
            icon: "fa-user"
        },
        {
            title: "Dashboard for Database Management",
            description: "Developed an interactive dashboard for database visualization and management. Integrated with MySQL and PostgreSQL, using Python (Flask) for the backend and React.js for the frontend. Provided real-time analytics and data filtering.",
            icon: "fa-database"
        }
    ];

    return (
        <div className="projects-page">
            {/* Home Button */}
            <Link to="/" className="home-button">
                <i className="fas fa-home"></i> Home
            </Link>

            {/* Page Title */}
            <h1>MY PROJECTS</h1>

            {/* Projects Container */}
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className={`project-card ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="project-content">
                            <i className={`fas ${project.icon} project-icon`}></i>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;