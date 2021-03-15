import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import SweetHome from '../../media/images/sweet-home.svg'

function DonationConfirmation() {
	const [redirect, setRedirect] = useState(false);

    console.log(redirect)

    if (redirect) {
        return <Redirect to='/home' />;
    }

    return (
        <div>
            <h1>Thank you for your donation!</h1>
            <br/>
            <img src={SweetHome} alt='thank you'/>
            <br/>
            <br/>
            <button onClick={() => setRedirect(true)}>Return to Home</button>
        </div>
    )
}

export default DonationConfirmation
