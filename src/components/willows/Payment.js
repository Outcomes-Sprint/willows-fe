import React, {useState} from 'react';
import Axios from 'axios';

const Payment = () => {
    const initialState = {
		bankAccountNumber: '',
		accountRouting: '',
		moneyNeeded: '',
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
				<div>Provide your payment informoation to recieve donations</div>
				<form onSubmit={handleSubmit}>
					<label htmlFor='bankAccountNumber'>
						What's your bank account number?
					</label>
					<input
						id='bankAccountNumber'
						onChange={handleChange}
						value={formState.bankAccountNumber}
						placeholder='Bank account number'
					/>
					<label htmlFor='accountRouting'>What's your routing number?</label>
					<input
						id='accountRouting'
						onChange={handleChange}
						value={formState.accountRouting}
						placeholder='Routing number'
					/>
					<label htmlFor='moneyNeeded'>How much money will you need?</label>
					<input
						id='moneyNeeded'
						onChange={handleChange}
						value={formState.moneyNeeded}
						placeholder='For example: $4,000'
					/>
					<div>Link Paypal</div>
					<div>P</div>
					<div>Great! Next, We'll need: </div>
					<button type='submit'>Documentation</button>
				</form>
			</div>
		);
};

export default Payment;