import React, { useState } from 'react';
import './PropertyPost.css';
import Axios from 'axios';
import { APIURL } from '../../config';
import ThankYou from '../../media/images/ty.png';

function PropertyPost({ setRenderComponent }) {
	const [submitted, setSubmitted] = useState(false);

	const [propertyForm, setPropertyForm] = useState({
		address: '',
		owner: '',
		user: '',
		story: '',
		amount_needed: '',
		monthly_payment: '',
		missed_payments: '',
		approved: '',
		documentation: '',
		foreclosure_status: '',
	});

	const foreclosureStatusOptions = {
		pre_foreclosure: 'Pre-Foreclosure',
		phase_1: 'Payment Default',
		phase_2: 'Notice of Default',
		phase_3: "Notice of Trustee's Sale",
		phase_4: "Trustee's Sale",
		phase_5: 'Real Estate Owned(REO)',
		phase_6: 'Eviction',
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		Axios({
			method: 'post',
			url: APIURL,
			headers: {
				// Authorization: `Token ${token}`,
			},
			data: propertyForm,
		}).then(setSubmitted(true));
		console.log(propertyForm);

		setTimeout(() => {
			setRenderComponent('Show');
		}, 2500);
	};

	const handleChange = (e) => {
		e.preventDefault();
		setPropertyForm({
			...propertyForm,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div>
			<h1>PropertyPost</h1>

			{submitted ? (
				<>
					<div>Thank you!</div>
					<div><img src={ThankYou} alt='Thank You' /></div>
					<div>
						We'll send you an email once your listing is approved.
					</div>
					<div>(It should bee within a week)</div>
				</>
			) : (
				<>
					<div>Tell us a bit about your mortgage</div>
					<form onSubmit={handleSubmit}>
						<div>
							<label htmlFor='monthlyPayment'>
								What's your monthly mortgage payment?
							</label>
							<br />
							<input
								type='text'
								name='address'
								placeholder='Enter Address'
								value={propertyForm.address}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label htmlFor='monthlyPayment'>
								What's your monthly mortgage payment?
							</label>
							<br />
							<input
								type='text'
								name='address'
								placeholder='Enter Address'
								value={propertyForm.address}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label htmlFor='monthlyPayment'>
								What's your monthly mortgage payment?
							</label>
							<br />
							<input
								type='text'
								name='address'
								placeholder='Enter Address'
								value={propertyForm.address}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label htmlFor='monthlyPayment'>
								What's your monthly mortgage payment?
							</label>
							<br />
							<input
								type='text'
								name='address'
								placeholder='Enter Address'
								value={propertyForm.address}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label htmlFor='monthlyPayment'>
								What's your monthly mortgage payment?
							</label>
							<br />
							<input
								type='text'
								name='address'
								placeholder='Enter Address'
								value={propertyForm.address}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label htmlFor='monthlyPayment'>
								What's your monthly mortgage payment?
							</label>
							<br />
							<input
								type='text'
								name='address'
								placeholder='Enter Address'
								value={propertyForm.address}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label htmlFor='monthlyPayment'>
								What's your monthly mortgage payment?
							</label>
							<br />
							<input
								type='text'
								name='address'
								placeholder='Enter Address'
								value={propertyForm.address}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label htmlFor='monthlyPayment'>
								What's your monthly mortgage payment?
							</label>
							<br />
							<input
								type='text'
								name='address'
								placeholder='Enter Address'
								value={propertyForm.address}
								onChange={handleChange}
							/>
						</div>

						<button>Submit</button>
					</form>
				</>
			)}
		</div>
	);
}

export default PropertyPost;
