import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
        <div>
            <img id="green" src="Helpaneighbor.png" />
            <h3>Help a Neighbor Save their Home</h3>
            <Link to='/Map'>Find Listing</Link>
            <br></br>
            <img id="green" src="Needhelp.png" />
            <h3>Need help with your mortgage payment?</h3>
            <Link to='/signup'>Create Listing</Link>
            <br></br>
            <img id="green" src="Home.png" />


        </div>
    );
};

export default Home; 