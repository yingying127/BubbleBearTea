import React from 'react';
import { connect } from 'react-redux';

const About = ({}) => {
    return (
        <div>
            <h2>About</h2>
        </div>
    )
}

export default connect(state => state)(About)