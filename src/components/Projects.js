import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: "Quiz Application",
      description: "A responsive quiz application with a timer and results feature, built using HTML, CSS, and React.js.",
      technologies: ["React.js", "CSS", "JavaScript"],
      link: "#",
    },
    {
      title: "Personal Portfolio",
      description: "An attractive personal portfolio to showcase my web development projects and skills.",
      technologies: ["React.js", "CSS", "JavaScript"],
      link: "#",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
