import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ drinks, toppings }) => {
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-logo'>
                    <Link to="/home"> <img className='logo' src="/images/logo.png"/> </Link> 
                </div>
                <div className='navbar-main'>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/drinks'>Drinks</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/gallery'>Gallery</Link></li>
                </div>
            </nav>
        </div>
    )
}

export default connect(state => state)(Navbar)