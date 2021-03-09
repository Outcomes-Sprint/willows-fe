export const APIURL =
	window.location.hostname === 'localhost'
		? 'http://localhost:8000'
        // edit url below to be backend deployed address
		: 'https://our-backend.herokuapp.com';