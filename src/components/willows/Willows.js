import React from 'react';
import SetUp from './SetUp'
import Mortgage from './Mortgage'
// import Payment from './Payment'
import ThankYou from './ThankYou'
import MortgageDocs from './MortgageDocs';
import Signup from '../signup/SignUp'
import './Willows.css'

const Willows = ({ loggedIn }) => {
	return (
		<div /* style={{ display: loggedIn ? 'block' : 'none' }} */>
			<Signup />
			<SetUp />
			<Mortgage />
			{/* <Payment /> */}
			<MortgageDocs />
			<ThankYou />
		</div>
	);
};

export default Willows;