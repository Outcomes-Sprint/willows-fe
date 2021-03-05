import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
	return (
		<div>
			<div id='brand'><Link to='/home'>Willow</Link></div>
			<nav>
				<Link to='/signin'>Login</Link>
				<Link to='/Map'>Find Listing</Link>
			</nav>
		</div>
	);
};

export default Navigation;
