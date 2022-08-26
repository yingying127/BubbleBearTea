import React from 'react';
import { connect } from 'react-redux';

const Toppings = ({ toppings }) => {
    return (
        <div>
            <h2>Toppings</h2>
        </div>
    )
}

export default connect(state => state)(Toppings)