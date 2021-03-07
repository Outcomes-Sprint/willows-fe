import React from 'react';
import Su from './images/su.png'

const SetUp = () => {
	return (
		<div>
			<div>Let's get you set up</div>
			<div>
				<form>
					<label htmlFor='address'>What's your property address?</label>
					<input 
                        id='address'
                        placeholder='Property Address'
                    />
					<label htmlFor='title'>Who's the title owner</label>
					<input 
                        id='title'
                        placeholder='Title Owner'
                    />
					<label>What's your email?</label>
					<input 
                        id='titleEmail'
                        placeholder='Email Contact'
                    />
					<div><img src={Su} alt='Set up image' /></div>
					<div>Thanks! Next, We'll need:</div>
					<button type='submit'>Mortgage Information</button>
				</form>
			</div>
		</div>
	);
};

export default SetUp;
