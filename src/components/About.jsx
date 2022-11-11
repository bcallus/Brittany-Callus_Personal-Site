import React from 'react';
import Collapsible from './Collapsible'


const About = () => {

    return (
        <div>
            <Collapsible label="Education" />
            <hr />
            <Collapsible label="Professional Experience"/>
            <hr />
            <Collapsible label="Mission"/>
            <hr />
            <Collapsible label="Personal Life"/>
            <hr />

            {/* build react component and use state to make collapsible sections for the about me */}
            <button type="button" className="about-page-collapsible-section">Education</button>
            <div className="about-page-collapsible-content">
                <p>{`I am a graduate of the University of North Florida's Division of Continuing Education's web development program, which is powered by Fullstack Academy. I have proficiencies and experience in developing full stack web applications using HTML, CSS, JavaScript, React JS, Node JS, Express JS, SQL, and PostgreSQL. See Skills for a more detailed list.`}</p>
            </div>
    
            <button type="button" className="about-page-collapsible-section">Professional Experience</button>
            <p>{`I have been a studio manager with a focus in sales for the past 5 years in the fitness/health & wellness industry. Prior to that I was an administrative assistant for a company that specialized in forensic data analysis, and that’s where I began building my full stack development skills.`}</p>

            <button type="button" className="about-page-collapsible-section">Mission Statement</button>

            {/* //perhaps create a mission statement page */}
            <p>{`I believe that my web development skillset and previous business experience will make me an asset to the right engineering team. My ability to effectively analyze and affect business needs (i.e. facilitating growth, monthly goals, team building, etc.) coupled with my self-discipline and short/long term goal setting strengths will enhance my growing development skills, making me a strong employee. I really do enjoy setting and achieving attainable goals and I am always striving to learn more. It’s something I try to implement daily even in my personal life.`}</p>
        </div>
    )

}

export default About;