import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { APIURL } from '../../utils/config';

function PropertyList() {
	const [propertyData, setPropertyData] = useState([]);
	console.log(APIURL);

	useEffect(() => {
		Axios({
			method: 'get',
			url: `${APIURL}/properties/`,
		}).then((res) => {
			console.log(res);
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
