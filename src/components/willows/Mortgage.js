import React from 'react';
import mortgage from './images/mortgage.png'

const Mortgage = () => {
    return (
			<div>
				<div>Tell us a bit about your mortgage</div>
				<div>
					<form>
						<label htmlFor='monthlyPayment'>What's your monthly mortgage payment?</label>
						<input 
                            id='monthlyPayment'
                            placeholder='Monthly Payment'
                        />
						<label htmlFor='process'>Where are you in the foreclosure process?</label>
						<input 
                            id='process'
                            placeholder='Section of the process'
                        />
						<label htmlFor='missed'>How many payments have you missed?</label>
						<input 
                            id='missed'
                            placeholder='Number of payments'
                        />
                        <div><img src={mortgage} alt='mortgage info page image' /></div>
                        <div>Appreciate it! Next, We'll need: </div>
                        <button>Financial Information</button>
					</form>
				</div>
			</div>
		);
};

export default Mortgage;