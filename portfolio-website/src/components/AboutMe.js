import React from 'react';
import './AboutMe.css'; // Assuming you have a separate CSS file for AboutMe component styles

const AboutMe = () => {
    return (
        <section id="about-me" className="about-me">
            <h2>About Me</h2>
            <p>
                Hello! I'm a passionate developer with a love for creating dynamic and user-friendly web applications. 
                My journey in tech began with a fascination for coding, and it has evolved into a career where I enjoy 
                solving problems and building innovative solutions.
            </p>
            <h3>Skills</h3>
            <ul className="skills-list">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>CSS & HTML</li>
                <li>Python</li>
            </ul>
            <div className="animation-container">
                <p>Check out my projects to see what I've been working on!</p>
            </div>
        </section>
    );
};

export default AboutMe;