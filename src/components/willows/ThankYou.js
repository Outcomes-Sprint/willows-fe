import React from 'react';
import Ty from './images/ty.png'

const ThankYou = () => {
    return (
			<div>
				<div>Thank you!</div>
				<div><img src={Ty} alt='Thank you page image' /></div>
				<div>We'll send you an email once your listing is approved.</div>
				<div>(It should bee within a week)</div>
			</div>
		);
};

export default ThankYou;