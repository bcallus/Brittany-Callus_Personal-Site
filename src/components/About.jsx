import React from "react";
import Collapsible from "./Collapsible";
import UNF_Logo from '../assets/UNF_Logo.png'
import FullstackAcademy_Logo from '../assets/FullstackAcademy_logo.jpeg'
import NorthwesternUniversity_Logo from '../assets/NorthwesternUniversity_Logo.gif'

const About = () => {
  return (
    <div className="about-collapsibles">
      <Collapsible label="Education">
        <p>{`I am a graduate of the University of North Florida's Division of Continuing Education's web development program, which is powered by Fullstack Academy. I have proficiencies and experience in developing full stack web applications using HTML, CSS, JavaScript, React JS, Node JS, Express JS, SQL, and PostgreSQL. See Skills for a more detailed list.`}</p>
        <p>{`I also earned 35/45 credits towards a Bachelor Degree at Northwestern University.`}</p>
        <div className="school-logos">
          <img src={UNF_Logo} alt='UNF Logo' className='school-logo'/>
          <img src={FullstackAcademy_Logo} alt='UNF Logo' className='school-logo'/>
          <img src={NorthwesternUniversity_Logo} alt='UNF Logo' className='school-logo'/>
        </div>
      </Collapsible>
      
      <Collapsible label="Professional Experience">
        <p>{`I have been a studio manager with a focus in sales for the past 5 years in the fitness/health & wellness industry. Prior to that I was an administrative assistant for a company that specialized in forensic data analysis, and that’s where I began building my full stack development skills.`}</p>
        <ul className="job-history">
          <li>Studio Manager @ Degree Wellness - Jacksonville, FL | March 2020 - Sept 2022 </li>
            <ul>
              <li>Aligned and directed medical staff and sales team to drive sales and increase revenue.</li>
              <li>Maintained and monitored accounts of 400+ members and clients while providing excellent customer service and experience.</li>
            </ul>
          <li>Studio Manager @ Orangetheory Fitness - Jacksonville, FL | March 2018 - March 2020</li>
            <ul>
              <li>Achieved #4 ranking of overall sales growth out of all OTF studios in the state of Florida in 2019.</li>
              <li>Cultivated, led, and motivated a team of 20+ employees and 700+ members of whom I knew all on a first name basis.</li>
              <li>Received Passion Award and recognized as the “P” in the “E.P.I.C” mission statement of the franchise; Excellence, Passion, Integrity, Community.</li>
            </ul>
          <li>Administrative Assistant @ Advanced Forensic Analytical Systems, LLC - Marshall, VA & Remote | January 2016 - March 2020</li>
            <ul>
              <li>Boosted productivity by aiding and supporting data analysts as needed.</li>
              <li>Assisted in approving payroll, expense reports, and travel arrangements.</li>
              <li>Began intro courses to HTML, CSS, and Splunk.</li>
            </ul>
          <li>Administrative Assistant @ Isurus Solutions - New York, NY | January 2012 - January 2016</li>
            <ul>
              <li>Managed payroll, expense reports, and travel arrangements.</li>
              <li>Organized general office duties such as word processing, copying, filing, data entry.</li>
            </ul>
        </ul>
      </Collapsible>
      
      <Collapsible label="Mission">
        <p>{`I’m currently looking for an opportunity in full stack development where I can collaborate with a diverse team to solve critical problems and effectively make a positive impact.`}</p>
        <p>{`I think it is brilliant and amazing what engineering teams are able to accomplish together. My brain truly enjoys solving critical problems. Even as a kid I was always solving logic problems and math puzzles for fun. I find projects of this nature to be intrinsically rewarding, and I am always eager to learn more and better my craft. I know that I am meant to thrive in a tech environment where I can be a part of building, solving, and analyzing great things, and it is my current mission is to make that happen.`}</p>
        <p>{`I believe that my web development skillset and previous business experience will make me an asset to the right engineering team. My ability to effectively analyze and affect business needs (i.e. facilitating growth, monthly goals, team building, etc.) coupled with my self-discipline and short/long term goal setting strengths will enhance my growing development skills, making me a strong employee. I really do enjoy setting and achieving attainable goals and I am always striving to learn more. It’s something I try to implement daily even in my personal life.`}</p>
        <p>Current Mission: Reach Software Development Nirvana!</p>
      </Collapsible>
      
      <Collapsible label="Personal Life">
        <p>{`From the age of 5 up until my early 20s, much of my youth was spent studying and performing as a classically trained violinist and violist. I was a member of the New York Youth Symphony for many years, and attended Northwestern Univeristy as a Music Performace major, where I studied viola performance under Roland Vamos.'`}</p>
        <p>{`I am an fitness enthusiast and advocate. I was a student athlete on the swim team in my youth and then refound my love for fitness as an adult. I enjoy working hard and am rewarded by a higher quality of life, not just physically, but mentally and emotionally as well. It allows me to hold myself to a high standard where I can practice discipline and consistently strive for improvement in whatever areas I choose. Don't belive me? Try a Spartan Race some time! You just might have fun.`}</p>
      </Collapsible>
    </div>
  );
};

export default About;
