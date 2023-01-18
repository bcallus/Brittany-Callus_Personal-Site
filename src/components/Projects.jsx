import React from 'react';

const Projects = () => {

    return (
        <div>
            <div className="project-card-container">
                {/* map through projects list */}
                <div> {/*needs unique key*/}
                    <p>Project Name</p>
                    <p>Project Image - use img tag</p>
                    <p>Project Description</p>
                    <button>View Project</button>
                </div>
            </div>

        </div>
    )

}

export default Projects;