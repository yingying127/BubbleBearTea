import React from 'react';
import { connect } from 'react-redux';

const Home = ({}) => {
    return (
        <div>
            <h2>Home yaaa</h2>
        </div>
    )
}

export default connect(state => state)(Home)