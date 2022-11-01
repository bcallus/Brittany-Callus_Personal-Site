import React from 'react';
import { Link }from 'react-router-dom';

const Navbar = () => {

    return (
        <div className='navbar'>
            <h1>BC.</h1>
            <ul className='navbar-tabs'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/skills'>Skills</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;