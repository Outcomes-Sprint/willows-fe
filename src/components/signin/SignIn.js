import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import './SignIn.css';


const SignIn = () => {
	const initialState = {
		email: '',
		password: '',
	};
	const [formState, setFormState] = useState(initialState);
	const handleSubmit = (event) => {
		event.preventDefault();
		Axios({
			url: '',
			method: 'POST',
			data: formState,
		}).then((res) => {

		});
		setFormState(initialState);
	};
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};
	return (
		<div>
			<img id="green" src="Willow.png" />
			<div className='loginTitle'>Login Below:</div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='email' className='emailLabel'>
					Enter Email:{' '}
				</label>
				<input
					id='email'
					onChange={handleChange}
					value={formState.email}
					placeholder='Email'
					className='emailInput'
				/>{' '}
				<br />
				<label htmlFor='password' className='passwordLabel'>
					Enter Password:{' '}
				</label>
				<input
					id='password'
					onChange={handleChange}
					value={formState.password}
					placeholder='Password'
					className='passwordInput'
				/>
				<button type='submit' className='loginSubmit'>
					Submit
				</button>
			</form>
			<div>
				Not Signed Up Yet? <Link to='/signup'>Register</Link>
			</div>
		</div>
	);
};

export default SignIn;
