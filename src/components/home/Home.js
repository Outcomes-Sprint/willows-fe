import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            Home
            <nav>
                <Link to='/signup'>Create Listing</Link>
                <br></br>
                <Link to='/signin'>Login</Link>
                <br></br>
                <Link to='/Map'>Find Listing</Link>
            </nav>
        </div>
    );
};

export default Home; 