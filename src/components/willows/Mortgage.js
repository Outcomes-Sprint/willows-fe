import React, { useState } from 'react';
import Axios from 'axios';
import mortgage from './images/mortgage.png'

const Mortgage = () => {
	const initialState = {
		monthlyPayment: '',
		process: '',
		missed: '',
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
				<div>Tell us a bit about your mortgage</div>
				<div>
					<form onSubmit={handleSubmit}>
						<label htmlFor='monthlyPayment'>
							What's your monthly mortgage payment?
						</label>
						<input
							id='monthlyPayment'
							onChange={handleChange}
							value={formState.monthlyPayment}
							placeholder='Monthly Payment'
						/>
						<label htmlFor='process'>
							Where are you in the foreclosure process?
						</label>
						<input
							id='process'
							onChange={handleChange}
							value={formState.process}
							placeholder='Section of the process'
						/>
						<label htmlFor='missed'>How many payments have you missed?</label>
						<input
							id='missed'
							onChange={handleChange}
							value={formState.missed}
							placeholder='Number of payments'
						/>
						<div>
							<img src={mortgage} alt='mortgage info' />
						</div>
						<div>Appreciate it! Next, We'll need: </div>
						<button type='submit'>Financial Information</button>
					</form>
				</div>
			</div>
		);
};

export default Mortgage;