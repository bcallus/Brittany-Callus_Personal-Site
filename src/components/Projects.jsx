import React from 'react';
import projectsData from '../data/projectsData.js';

const Projects = () => {
    const projectsList = projectsData;

    return (
        <div>
            <div className="project-card-container">
                {projectsList.map((project) => (
                    <div className='project-card' key={project.id}>
                        <p>{project.name}</p>
                        <img src={project.img} alt={project.name} className='project-image'/>
                        <p>{project.description}</p>
                        <p>{project.techStack}</p>
                        <button>View Project</button>
                </div>
                ))}
            </div>

        </div>
    )

}

export default Projects;