import React from 'react';
import headshot from '../assets/headshot.JPG'

const Home = () => {

    return (
        <div>
            <h1>Home Test</h1>
            <h1>Hello</h1>
            <p>I'm Brittany Callus</p>
            <p>the full stack developer - the sales manager - the musician</p>
            <img src={headshot} alt='headshot' className='headshot'/>
        </div>
        
    )

}

export default Home;