import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
	return (
		<nav class='flexnav'>
			<div><Link to='/home'>Willow</Link></div>
			<br></br>
			<Link to='/signin'>Login</Link>
		</nav>
	);
};

export default Navigation;
