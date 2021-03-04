import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
	return (
		<div>
			<div>Brand</div>
			<nav>
				<Link to='/home'>Home</Link>
				<Link to='/signin'>Login</Link>
				<Link to='/Map'>Map</Link>
			</nav>
		</div>
	);
};

export default Navigation;
