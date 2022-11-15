import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ }) => {
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-logo'>
                    <Link to="/home"> <img className='logo' src="/images/logo.png"/> </Link> 
                </div>
                <div className='navbar-main'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/drinks'>Drinks</Link></li>
                    <li><a href='https://www.grubhub.com/restaurant/bubble-bear-tea-160-walt-whitman-road-1017-huntington-station/4283744'>Order</a></li>
                </div>
            </nav>
        </div>
    )
}

export default connect(state => state)(Navbar)