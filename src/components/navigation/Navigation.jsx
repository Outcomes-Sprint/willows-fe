import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
	return (
		<div class='flexnav'>
			<div><Link to='/home'>Willow</Link></div>
		</div>
	);
};

export default Navigation;
