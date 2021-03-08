import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
        <div className="home">
            <img className="main" src="Helpaneighbor.png" alt='neighbourHelp'/>
            <h3>Help a Neighbor Save their Home</h3>
            <button><NavLink className="link" exact to='/Map'>Find Listings</NavLink></button>
            <br></br>
            <br></br>
            <img className="main" src="Needhelp.png" alt='needHelp' />
            <h3>Need help with your mortgage payment?</h3>
            <button><NavLink className="link" exact to='/signup'>Create a Listing</NavLink></button>
            <br></br>
            <br></br>
            <img className="main" src="Home.png" alt='home'/>


        </div>
    );
};

export default Home; 