import React from 'react';
import './Socials.css'; // Assuming you have a separate CSS file for styling

const Socials = () => {
    return (
        <div className="socials-container">
            <h2>Connect with Me</h2>
            <ul className="socials-list">
                <li>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <i className="icon-github"></i> GitHub
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <i className="icon-linkedin"></i> LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <i className="icon-twitter"></i> Twitter
                    </a>
                </li>
                <li>
                    <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                        <i className="icon-website"></i> Personal Website
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Socials;