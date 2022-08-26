import React from 'react';
import { connect } from 'react-redux';

const Drinks = ({ drinks }) => {
    return (
        <div>
            <h2>Drinks</h2>
        </div>
    )
}

export default connect(state => state)(Drinks)