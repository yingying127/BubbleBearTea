import React from 'react';
import { connect } from 'react-redux';

const BottomNavbar = ({}) => {
    return (
        <div className='bottomnav'>
            <h1>Bottom Nav</h1>
        </div>
    )
}

export default connect(state => state)(BottomNavbar)