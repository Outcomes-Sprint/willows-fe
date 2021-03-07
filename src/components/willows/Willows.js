import React from 'react';
import SetUp from './SetUp'
import Mortgage from './Mortgage'
import Payment from './Payment'
import ThankYou from './ThankYou'
import MortgageDocs from './MortgageDocs';
import './Willows.css'

const Willows = () => {
    return (
        <div>
            <SetUp />
            <Mortgage />
            <Payment />
            <MortgageDocs />
            <ThankYou />
        </div>
    );
};

export default Willows;