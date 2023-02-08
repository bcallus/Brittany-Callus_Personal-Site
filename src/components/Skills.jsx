import React from 'react';
import skillsData from '../data/skillsdata';

const Skills = () => {
    const skillsList = skillsData;

    return (
        <div className='skills-cards-container'>
            {skillsList.map((skill) => (
                <div className='skill-card' key={skill.id}>
                    <img src={skill.img} alt='HTML5 logo' className='skill-logo-image' />
                    <p className='skill-name'>{skill.name}</p>
                </div>
            ))}
        </div>
    )

}

export default Skills;