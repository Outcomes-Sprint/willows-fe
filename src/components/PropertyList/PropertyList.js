import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { APIURL } from '../../utils/config';

function PropertyList() {
	const [propertyData, setPropertyData] = useState([]);

	useEffect(() => {
		Axios({
			method: 'get',
			url: `${APIURL}/donations`,
			headers: {
				// Authorization: `Token ${token}`,
			},
		}).then((res) => {
			console.log(res)
			setPropertyData(res.data);
		});
	}, []);

	return (
		<div>
			<h1>Listings</h1>
			<p>{JSON.stringify(propertyData)}</p>
		</div>
	);
}

export default PropertyList;
