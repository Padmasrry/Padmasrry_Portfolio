import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Skills.css';

const Skills = () => {
    useEffect(() => {
        const skills = [
            { name: "Java", size: "20px" },
            { name: "Python", size: "18px" },
            { name: "Django", size: "22px" },
            { name: "Flask", size: "20px" },
            { name: "SQL", size: "18px" },
            { name: "CSS", size: "16px" },
            { name: "Express", size: "16px" },
            { name: "JavaScript", size: "14px" },
            { name: "HTML", size: "22px" },
            { name: "Data Structures", size: "14px" },
            { name: "Exploratory Data Analysis", size: "16px" },
        ];

        const container = document.getElementById("skills-container");
        const radius = 160; // Radius of the circle
        const centerX = 200; // Center X of the circle
        const centerY = 200; // Center Y of the circle

        skills.forEach((skill, index) => {
            const angle = (index / skills.length) * 2 * Math.PI; // Angle for each skill
            const x = centerX + Math.cos(angle) * radius; // X position
            const y = centerY + Math.sin(angle) * radius; // Y position

            const span = document.createElement("span");
            span.textContent = skill.name;
            span.className = "skill";
            span.style.fontSize = skill.size;
            span.style.left = `${x}px`;
            span.style.top = `${y}px`;

            container.appendChild(span);
        });
    }, []);

    const achievements = [
        {
            title: "Full-Stack Web Application Deployment",
            description: "Successfully deployed a full-stack web application for ASD diagnosis using an ANN Model.",
            icon: "fa-brain"
        },
        {
            title: "LeetCode Problem Solving",
            description: "Solved 100+ LeetCode problems using data structures and 50+ problems using SQL.",
            icon: "fa-code"
        }
    ];

    return (
        <div className="skills-page">
            {/* Home and Contact Buttons */}
            <div className="buttons-container">
                <Link to="/" className="home-button">
                    <i className="fas fa-home"></i> Home
                </Link>
                <Link to="/contact" className="contact-button">
                    <i className="fas fa-envelope"></i> Contact
                </Link>
            </div>

            {/* Grid Container */}
            <div className="grid-container">
                {/* Left Section - Key Achievements */}
                <div className="left-section">
                    <div className="achievements-container">
                        <h1>Key achievements</h1>
                        {achievements.map((achievement, index) => (
                            <div key={index} className={`achievement-card ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="achievement-content">
                                    <i className={`fas ${achievement.icon} achievement-icon`}></i>
                                    <h3>{achievement.title}</h3>
                                    <p>{achievement.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section - Skills Circle */}
                <div className="right-section">
                    <div className="skills-container" id="skills-container">
                        {/* Skills will be dynamically added here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;