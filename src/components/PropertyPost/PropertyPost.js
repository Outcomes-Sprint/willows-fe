import React, { useState } from 'react';
import './PropertyPost.css';
import Axios from 'axios';
import { APIURL } from '../../utils/config';
import ThankYou from '../../media/images/ty.png';

function PropertyPost({ setRenderComponent, propertyData }) {
	const [submitted, setSubmitted] = useState(false);
	const [formSection, setFormSection] = useState(1);

	const [propertyForm, setPropertyForm] = useState({
		address: '',
		owner: '',
		user: '',
		// need to pass down user pk from Login
		story: '',
		// need to expand box to show more characters for styling purposes
		amount_needed: '',
		monthly_payment: '',
		missed_payments: '',
		approved: 'False',
		// we probably won't need to include this because the default will be false
		documentation: '',
		// need to look at how Ash did it
		foreclosure_status: '',
	});

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

	const nextSection = (e) => {
		e.preventDefault()
		setFormSection(formSection + 1)
	}
	
	const prevSection = (e) => {
		e.preventDefault()
		setFormSection(formSection - 1)
	}

	return (
		<div>
			<h1>PropertyPost</h1>

			{submitted ? (
				<>
					<div>Thank you!</div>
					<div>
						<img src={ThankYou} alt='Thank You' />
					</div>
					<div>
						We'll send you an email once your listing is approved.
					</div>
					<div>(It should bee within a week)</div>
				</>
			) : (
				<>
					<div>Tell us a bit about your mortgage</div>
					<h6>page {formSection} / 3</h6>
					<form onSubmit={handleSubmit}>
						{formSection === 1 ? (
							<>
								<div>
									<label htmlFor='address'>
										What is the address of the property?
									</label>
									<br />
									<input
										type='text'
										name='address'
										placeholder='123 Uh Oh Lane'
										value={propertyForm.address}
										onChange={handleChange}
									/>
								</div>
								<div>
									<label htmlFor='owner'>
										What is the owner's name?
									</label>
									<br />
									<input
										type='text'
										name='owner'
										placeholder='John Appleseed'
										value={propertyForm.owner}
										onChange={handleChange}
									/>
								</div>
							</>
						) : null}
						{formSection === 2 ? (
							<>
								<div>
									<label htmlFor='monthly_payment'>
										What's your monthly mortgage payment?
									</label>
									<br />
									<input
										type='number'
										name='monthly_payment'
										placeholder='$1200'
										value={propertyForm.monthly_payment}
										onChange={handleChange}
									/>
								</div>
								<div>
									<label htmlFor='amount_needed'>
										What is the total amount that you need
										donated?
									</label>
									<br />
									<input
										type='number'
										name='amount_needed'
										placeholder='$50,000'
										value={propertyForm.amount_needed}
										onChange={handleChange}
									/>
								</div>
								<div>
									<label htmlFor='missed_payments'>
										How many payments have you missed?
									</label>
									<br />
									<input
										type='number'
										name='missed_payments'
										placeholder='4'
										value={propertyForm.missed_payments}
										onChange={handleChange}
									/>
								</div>
							</>
						) : null}
						{formSection === 3 ? (
							<>
								<div>
									<label htmlFor='foreclosure_status'>
										What stage of the foreclosure process
										are you in?
									</label>
									<br />
									<select
										name='foreclosure_status'
										onChange={handleChange}>
										<option
											value={
												propertyForm.foreclosure_status
											}>
											Pre-Foreclosure
										</option>
										<option
											value={
												propertyForm.foreclosure_status
											}>
											Payment Default
										</option>
										<option
											value={
												propertyForm.foreclosure_status
											}>
											Notice of Default
										</option>
										<option
											value={
												propertyForm.foreclosure_status
											}>
											Notice of Trustee's Sale
										</option>
										<option
											value={
												propertyForm.foreclosure_status
											}>
											Trustee's Sale
										</option>
										<option
											value={
												propertyForm.foreclosure_status
											}>
											Real Estate Owned(REO)
										</option>
										<option
											value={
												propertyForm.foreclosure_status
											}>
											Eviction
										</option>
									</select>
								</div>
								<div>
									<label htmlFor='story'>
										What is the story behind your
										foreclosure situation?
									</label>
									<br />
									<input
										type='text'
										name='story'
										placeholder='I messed up like real bad'
										value={propertyForm.story}
										onChange={handleChange}
									/>
								</div>
								<div>Upload Pre-forclosure Notice</div>
								<div>
									We can use this document to verify your
									listing, so that you can get the help you
									need.
								</div>
							</>
						) : null}
						{formSection !== 1 ? (
							<button onClick={prevSection}>Previous</button>
						) : null}
						{formSection !== 3 ? (
							<button onClick={nextSection}>Next</button>
						) : null}
						<br />
						<button>Submit</button>
					</form>
				</>
			)}
		</div>
	);
}

export default PropertyPost;
