import React from 'react';
import { Link } from 'react-router-dom';
import './Experience.css';

const Experience = () => {
    return (
        <div className="container">
            {/* Header */}
            <header className="header">
                <div className="logo">
                    <h1>Padmasrry</h1>
                </div>
                <div className="nav-links">
                    <ul>
                       <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
                <a href="/contact" className="btn">Contact</a>
            </header>

            {/* Main Content */}
            <div className="main-content" id="experience">
                <h2>Experience</h2>
                <div className="experience-grid">
                    <div className="experience">
                        <h3>Web Development Intern</h3>
                        <p>Logic - A retail technology firm specializing in digital transformation, analytics, and cloud services, acquired by Accenture in 2024 to enhance retail innovation.</p>
                        <ul>
                            <li>Developed and maintained responsive, user-friendly front-end features using React.js, improving website performance and user experience.</li>
                            <li>Designed and implemented reusable, modular React components and created detailed stories for each component using Storybook, facilitating enhanced collaboration and streamlining UI development.</li>
                            <li>Integrated Storybook for isolated component development and visual testing, ensuring consistent design and reducing UI bugs during integration.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;