import React, { useEffect }  from 'react';
import projectsData from '../data/projectsData.js';

const Projects = () => {
    const projectsList = projectsData;
    // useEffect(() => {
    //     console.log("projectsList", projectsList)
    // }, [])

    return (
        <div>
            <div className="project-card-container">
                {projectsList.map((project) => (
                    <div key={project.id}>
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