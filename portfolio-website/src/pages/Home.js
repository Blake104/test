import React from 'react';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Socials from '../components/Socials';
import './Home.css'; // Assuming you have specific styles for the Home component

const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Welcome to My Portfolio</h1>
                <p>Explore my projects, learn about me, and connect with me!</p>
            </header>
            <section className="about-me">
                <AboutMe />
            </section>
            <section className="projects">
                <Projects />
            </section>
            <section className="socials">
                <Socials />
            </section>
        </div>
    );
};

export default Home;