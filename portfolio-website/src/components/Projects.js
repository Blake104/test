import React from 'react';

const projects = [
    {
        title: 'Project One',
        description: 'A brief description of Project One.',
        technologies: ['React', 'Node.js', 'CSS'],
        link: 'https://github.com/yourusername/project-one',
        demo: 'https://yourusername.github.io/project-one'
    },
    {
        title: 'Project Two',
        description: 'A brief description of Project Two.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://github.com/yourusername/project-two',
        demo: 'https://yourusername.github.io/project-two'
    },
    {
        title: 'Project Three',
        description: 'A brief description of Project Three.',
        technologies: ['Python', 'Flask', 'Bootstrap'],
        link: 'https://github.com/yourusername/project-three',
        demo: 'https://yourusername.github.io/project-three'
    }
];

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>My Projects</h2>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Code</a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;