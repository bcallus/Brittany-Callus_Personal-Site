import React from 'react';
import projectsData from '../data/projectsData.js';


const Projects = () => {
    const projectsList = projectsData;

    return (
        <div>
            <div className="project-card-container">
                {projectsList.map((project) => (
                    <div className="project-card" key={project.id}>
                        <p className="project-name">{project.name}</p>
                        <img src={project.img} alt={project.name} className='project-image' />
                        <p className='project-description'>{project.description}</p>
                        <p className='project-techStack'>{project.techStack}</p>
                        <a href={project.projectURL}>
                            <button>View Project</button>
                        </a>
                </div>
                ))}
            </div>

        </div>
    )

}

export default Projects;