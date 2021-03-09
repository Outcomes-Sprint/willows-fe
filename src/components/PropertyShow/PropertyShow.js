import React, { useState, useEffect } from 'react';
import './PropertyShow.css';
import Axios from 'axios';
import { APIURL } from '../../config';

function PropertyShow({ setRenderComponent }) {
	const [propertyData, setPropertyData] = useState([
		{
			address: '123 Uh Oh Lane',
			owner: 'John Appleseed',
			story: "I don't want to talk about it right now",
			amount_needed: 2400,
			monthly_payment: 1200,
			missed_payments: 2,
			approved: false,
			documentation: '',
			foreclosure_status: 'Pre-Foreclosure',
		},
	]);

	useEffect(() => {
		Axios({
			method: 'get',
			url: APIURL,
			headers: {
				// Authorization: `Token ${token}`,
			},
		}).then((res) => {
			setPropertyData(res.data);
		});
	}, []);

	return (
		<div>
			PropertyShow
			<button onClick={() => setRenderComponent('Post')}>
				{' '}
				Edit Property
			</button>
			<div>
				{propertyData.map((property) => {
					return (
						<div>
							<p>Address: {property.address}</p>
							<p>Owner: {property.owner}</p>
							<p>Story: {property.story}</p>
							<p>Amount Needed: {property.amount_needed}</p>
							<p>Missed Payments: {property.missed_payments}</p>
							<p>Approved: {property.approved ? 'Yes' : 'No'}</p>
							<p>
								Foreclosure Status:{' '}
								{property.foreclosure_status}
							</p>
							<p>Documentation: {property.documentation}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default PropertyShow;
