import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {

    return (
        <div>
            <Navbar />
            {/* <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route path='about' element={<About />}></Route>
                <Route path='projects' element={<Projects />}></Route>
                <Route path='skills' element={<Skills />}></Route>
            </Routes> */}
        </div>
    )
}

export default App;