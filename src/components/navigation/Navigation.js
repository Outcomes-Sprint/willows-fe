import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
			<div>
				<div>Brand</div>
				<nav>
					<Link to='/home'>Home</Link>
					<Link to='/signin'>Sign In</Link>
				</nav>
			</div>
		);
};

export default Navigation;