import React, { useState } from 'react';
import './PropertyPost.css';


function PropertyPost() {
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
			<form>
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
			</form>
		</div>
	);
}

export default PropertyPost;
