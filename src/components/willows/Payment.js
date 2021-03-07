import React from 'react';

const Payment = () => {
    return (
			<div>
				<div>Provide your payment informoation to recieve donations</div>
				<form>
					<label htmlFor='bankAccountNumber'>What's your bank account number?</label>
					<input 
                        id='bankAccountNumber'
                        placeholder='Bank account number'
                    />
					<label htmlFor='accountRouting'>What's your routing number?</label>
					<input 
                        id='accountRouting'
                        placeholder='Routing number'
                    />
					<label htmlFor='moneyNeeded'>How much money will you need?</label>
					<input 
                        id='moneyNeeded'
                        placeholder='For example: $4,000'
                    />
                    <div>Link Paypal</div>
                    <div>P</div>
                    <div>Great! Next, We'll need: </div>
                    <button type='submit'>Documentation</button>
				</form>
			</div>
		);
};

export default Payment;