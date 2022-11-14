import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar.js'

const Home = ({}) => {
    return (
        <div className='banner'>
            <Navbar />
        </div>
    )
}

export default connect(state => state)(Home)