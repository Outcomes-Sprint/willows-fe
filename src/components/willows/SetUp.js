import React, { useState } from 'react';
import Axios from 'axios';
import Su from './images/su.png'

const SetUp = () => {
	const initialState = {
		address: '',
		title: '',
		titleEmail: '',
	}
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
			<div>Let's get you set up</div>
			<div>
				<form>
					<label htmlFor='address'>What's your property address?</label>
					<input 
                        id='address'
						onChange={handleChange}
                        placeholder='Property Address'
                    />
					<label htmlFor='title'>Who's the title owner?</label>
					<input 
                        id='title'
						onChange={handleChange}
                        placeholder='Title Owner'
                    />
					<label htmlFor='titleEmail'>What's your email?</label>
					<input 
                        id='titleEmail'
						onChange={handleChange}
                        placeholder='Email Contact'
                    />
					<div><img src={Su} alt='Set up image' /></div>
					<div>Thanks! Next, We'll need:</div>
					<button type='submit'>Mortgage Information</button>
				</form>
			</div>
		</div>
	);
};

export default SetUp;
