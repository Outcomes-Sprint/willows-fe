import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const SignIn = () => {
	return (
		<div>
			Sign In
			<div>
				Not Signed Up Yet? <Link to='/signup'>Register</Link>
			</div>
		</div>
	);
};

export default SignIn;
