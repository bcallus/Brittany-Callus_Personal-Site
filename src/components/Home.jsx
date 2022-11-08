import React from 'react';
import headshot from '../assets/headshot.JPG'

const Home = () => {

    return (
        <div className='home-page-elements'>
            <div className="home-page-intro-text">
                <h1>Hello, I'm Brittany Callus.</h1>
                <p>I'm a full stack developer.</p> 
            </div>
            <img src={headshot} alt='headshot' className='headshot'/>
        </div>
        
    )

}

export default Home;