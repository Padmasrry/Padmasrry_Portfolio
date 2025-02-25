import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
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
               
            </header>

            {/* Main Content */}
            <div className="main-content" id="contact">
                <h2>Contact</h2>
                <div className="contact-grid">
                    <div className="contact-info">
                        <h3>Phone</h3>
                        <p>9790595382</p>
                        <h3>Email</h3>
                        <p>srrynthi@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;