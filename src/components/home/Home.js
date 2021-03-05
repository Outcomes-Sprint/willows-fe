import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
        <div className="home">
            <img className="main" src="Helpaneighbor.png" />
            <h3>Help a Neighbor Save their Home</h3>
            <button><NavLink className="link" exact to='/Map'>Find Listings</NavLink></button>
            <br></br>
            <img className="main" src="Needhelp.png" />
            <h3>Need help with your mortgage payment?</h3>
            <button><NavLink className="link" exact to='/signup'>Create a Listing</NavLink></button>
            <br></br>
            <br></br>
            <img className="main" src="Home.png" />


        </div>
    );
};

export default Home; 