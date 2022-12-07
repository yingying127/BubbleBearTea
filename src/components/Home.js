import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavbarHome from './NavbarHome.js'

const Home = ({}) => {
    return (
        <div>
            <div className='banner'>
                <NavbarHome />
                <div>
                    <h1 className='home-h1'>Entering Bubble Bear Tea</h1>
                    <h3 className='home-h2'>Expanding the possibilities of tea.<br/>Fresh brewed loose leaf tea paired with honey coated boba.</h3>
                </div>
            </div>
            <div className='banner2'>
                <h1 className='home-h3'>Meet us at<br/>Huntington,<br/>New York</h1>
            </div>
        </div>
    )
}

export default connect(state => state)(Home)