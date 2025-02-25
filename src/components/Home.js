import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Home.css';
import passport from '../images/passport.jpg'; // Import the image
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

const Home = () => {
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
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/experience">Experience</Link></li>
                        <li><Link to="/contact" className="btn">Contact</Link></li>
                    </ul>
                </div>
                
            </header>

            {/* Main Content */}
            <div className="main-content" id="home">
                <div className="main">
                    <div className="left">
                        <div className="line"></div>
                        <h1>I'M Padmasrry</h1>
                        <h2>An <span className="auto-type">MCA Graduate</span></h2>
                        <p>
                            An MCA graduate from SASTRA University with a passion for technology and problem-solving. Eager to contribute as a fresher in a dynamic organization by applying academic knowledge and project experience to real-world challenges. Committed to continuous learning and professional growth while delivering impactful results.
                        </p>

                        {/* Social Icons Below Paragraph */}
                        <div className="social">
                            <div className="social-link">
                                <a href="https://github.com/padmasrry" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-github"></i> {/* Bootstrap GitHub Icon */}
                                </a>
                            </div>
                            <div className="social-link">
                                <a href="https://linkedin.com/in/padmasrry" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-linkedin"></i> {/* Bootstrap LinkedIn Icon */}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="image">
                            <img src={passport} alt="Padmasrry" /> {/* Use the imported image */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;