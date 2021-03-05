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
			<img className="green" src="Willow.png" />

			<form onSubmit={handleSubmit}>
				<label htmlFor='email' className='emailLabel'>
					{' '}
				</label>
				<input
					id='email'
					onChange={handleChange}
					value={formState.email}
					placeholder='Email address'
					className='emailInput'
				/>{' '}
				<br></br>
				<br></br>
				<label htmlFor='password' className='passwordLabel'>
					{' '}
				</label>
				<input
					id='password'
					onChange={handleChange}
					value={formState.password}
					placeholder='Password'
					className='passwordInput'
				/>
				<br></br>
				<br></br>
				<br></br>
				<button type='submit' className='loginSubmit'>
					Submit
				</button>
			</form>
			<br></br>
			<br></br>
			<div>
				<Link to='/signup'>Sign Up</Link>
			</div>
		</div>
	);
};

export default SignIn;
