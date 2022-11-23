import React from 'react';
import { connect } from 'react-redux';

const BottomNavbar = ({}) => {
    return (
        <div className='bottomnav'>
            <p>© 2022 Bubble Bear Tea USA | All Rights Reserved</p>
        </div>
    )
}

export default connect(state => state)(BottomNavbar)