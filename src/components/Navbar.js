import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
    const [navbar, setNavbar] = useState(false)
    const [logo, setLogo] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    const changeLogo = () => {
        if (window.scrollY >= 100) {
            setLogo(true)
        } else {
            setLogo(false)
        }
    }

    window.addEventListener('scroll', changeBackground);
    window.addEventListener('scroll', changeLogo)

    return (
        <div className='navbar-div'>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className='navbar-logo'>
                <Link to="/home"> <img className={logo ? 'logo active' : 'logo'} src="/images/logo.png"/> </Link> 
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