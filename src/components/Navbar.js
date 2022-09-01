import React from 'react';
import { connect } from 'react-redux';

const Navbar = ({ drinks, toppings }) => {
    return (
        <div>
            <h1>Menu</h1>
        </div>
    )
}

export default connect(state => state)(Navbar)