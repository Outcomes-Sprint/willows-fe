import React, { useState } from 'react'
import './Property.css';

function Property() {
    const [propertyForm, setPropertyForm] = useState({
        address: '',
        owner: '',
        user: '',
        story: '',
        amount_needed: '',
        monthly_payment: '',
        missed_payments: '',
        approved: '',
        documentation: '',
        foreclosure_status: ''
    })

    const foreclosureStatusOptions = {
        pre_foreclosure: 'Pre-Foreclosure',
        phase_1: 'Payment Default',
        phase_2: 'Notice of Default',
        phase_3: 'Notice of Trustee\'s Sale',
        phase_4: 'Trustee\'s Sale',
        phase_5: 'Real Estate Owned(REO)',
        phase_6: 'Eviction',
    }

    return (
        <div>
            
        </div>
    )
}

export default Property
