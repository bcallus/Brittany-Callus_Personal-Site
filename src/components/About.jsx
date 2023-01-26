import React from "react";
import Collapsible from "./Collapsible";
import UNF_Logo from '../assets/UNF_Logo.png'
import FullstackAcademy_Logo from '../assets/FullstackAcademy_logo.jpeg'
import NorthwesternUniversity_Logo from '../assets/NorthwesternUniversity_Logo.png'
import NUSO from '../assets/NUSO.JPG'
import Fitness1 from '../assets/Fitness1.jpg'
import Fitness2 from '../assets/Fitness2.jpg'
import Fitness3 from '../assets/Fitness3.jpg'

const About = () => {
  return (
    <div className="about-collapsibles">
      <Collapsible label="Education">
        <p>{`I am a graduate of the University of North Florida's Division of Continuing Education's full stack web development program, which is powered by Fullstack Academy. I have proficiencies and experience in developing full stack web applications using HTML, CSS, JavaScript, React JS, Node JS, Express JS, SQL, and PostgreSQL. See Skills for a more detailed list.`}</p>
        <p>{`I also earned 35/45 credits towards a Bachelor Degree at Northwestern University.`}</p>
        <div className="school-logos">
          <img src={UNF_Logo} alt='UNF Logo' className='school-logo'/>
          <img src={FullstackAcademy_Logo} alt='UNF Logo' className='school-logo'/>
          <img src={NorthwesternUniversity_Logo} alt='UNF Logo' className='school-logo'/>
        </div>
      </Collapsible>
      
      <Collapsible label="Professional Experience">
        <p>{`I have been in management with a focus in sales for the past 5 years in the fitness/health & wellness industry. Prior to that I was an administrative assistant for a company that specialized in forensic data analysis, and that’s where I began building my full stack development skills.`}</p>
        <ul className="job-history">
          
          <div className="job">
            <li>
              <p className="job-title">Studio Manager</p>
              <p>Degree Wellness</p>
              <p className="job-location">Jacksonville, FL</p>
              <p>March 2020 - Sept 2022</p>
            </li>
            <ul className="job-bullets">
              <li>Aligned and directed medical staff and sales team to drive sales and increase revenue.</li>
              <li>Maintained and monitored accounts of 400+ members and clients while providing excellent customer service and experience.</li>
            </ul>
          </div>

          <div className="job">
            <li>
              <p className="job-title">Studio Manager</p>
              <p>Orangetheory Fitness</p>
              <p className="job-location">Jacksonville, FL</p>
              <p>March 2018 - March 2020</p>
            </li>
            <ul className="job-bullets">
              <li>Achieved #4 ranking of overall sales growth out of all OTF studios in the state of Florida in 2019.</li>
              <li>Cultivated, led, and motivated a team of 20+ employees and 700+ members of whom I knew all on a first name basis.</li>
              <li>Received Passion Award and recognized as the “P” in the “E.P.I.C” mission statement of the franchise; Excellence, Passion, Integrity, Community.</li>
            </ul>
          </div>

          <div className="job">
            <li>
              <p className="job-title">Administrative Assistant</p>
              <p>Advanced Forensic Analytical Systems, LLC</p>
              <p className="job-location">Marshall, VA & Remote</p>
              <p>January 2016 - March 2020</p>
            </li>
            <ul className="job-bullets">
              <li>Boosted productivity by aiding and supporting data analysts as needed.</li>
              <li>Assisted in approving payroll, expense reports, and travel arrangements.</li>
              <li>Began intro courses to HTML, CSS, and Splunk.</li>
            </ul>
          </div>

          <div className="job">
            <li>
              <p className="job-title">Administrative Assistant</p>
              <p>Isurus Solutions</p>
              <p className="job-location">New York, NY</p>
              <p>January 2012 - January 2016</p>
            </li>
            <ul className="job-bullets">
              <li>Managed payroll, expense reports, and travel arrangements.</li>
              <li>Organized general office duties such as word processing, copying, filing, data entry.</li>
            </ul>
          </div>

        </ul>
      </Collapsible>
      
      <Collapsible label="Mission">
        <p className="current-mission">CURRENT MISSION: ACCEPT FIRST OFFICIAL ROLE AS A DEVELOPER</p>
        <p>{`I’m currently looking for an opportunity in an area of full stack development or software engineering where I can collaborate with a diverse team to solve critical problems and effectively make a positive impact.`}</p>
        <p>{`I think it is brilliant and amazing what engineering teams are able to accomplish together. My brain truly enjoys solving critical problems. Even as a kid I was always solving logic problems and math puzzles for fun. I find projects of this nature to be intrinsically rewarding, and I am always eager to learn more and better my craft. I know that I am meant to thrive in a tech environment where I can be a part of building, solving, and analyzing great things, and it is my current mission is to make that happen.`}</p>
        <p>{`I believe that my web development skillset and previous business experience will make me an asset to the right engineering team. My ability to effectively analyze and affect business needs (i.e. facilitating growth, monthly goals, team building, etc.) coupled with my self-discipline and short/long term goal setting strengths will enhance my growing development skills, making me a strong employee. I really do enjoy setting and achieving attainable goals and I am always striving to learn more. It’s something I try to implement daily even in my personal life.`}</p>
      </Collapsible>
      
      <Collapsible label="Personal Life">
        <p>{`From the age of 5 up until my early 20s, much of my youth was spent studying and performing as a classically trained violinist and violist. I was a member of the New York Youth Symphony for many years, and attended Northwestern Univeristy as a Music Performace major, where I studied viola performance under Roland Vamos.`}</p>
        <img src={NUSO} alt='Northwestern University Symphony Orchestra' className='nuso-img'/>
        <p>{`I am an fitness enthusiast and advocate. I was a student athlete on the swim team in my youth and refound my love for fitness as an adult. I enjoy working hard and am rewarded by a higher quality of life, not just physically, but mentally and emotionally as well. It allows me to hold myself to a high standard where I can practice discipline and consistently strive for improvement in whatever areas I choose. Don't belive me? Try a Spartan Race some time! You just might have fun.`}</p>
        <div className='fitness-images'>
          <img src={Fitness1} alt='Official Spartan Race Obstacle' className='fitness-image'/>
          <img src={Fitness2} alt='Fitness Selfie' className='fitness-image'/>
          <img src={Fitness3} alt='Offical Spartan Race Bucket Carry Obstacle' className='fitness-image'/>
        </div>
      </Collapsible>
    </div>
  );
};

export default About;
