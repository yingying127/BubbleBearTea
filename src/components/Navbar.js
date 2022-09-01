import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ drinks, toppings }) => {
    return (
        <div>
            <nav>
                <div>
                    <Link to='/home'><img src='/public/logo-08.png'/></Link>
                </div>
                <div>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/gallery'>Gallery</Link></li>
                </div>
            </nav>
        </div>
    )
}

export default connect(state => state)(Navbar)