import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavbarHome from './NavbarHome.js'

const Home = ({}) => {
    return (
        <div className='banner'>
            <NavbarHome />
            {/* <div className='navbar-home'>
                <nav className='navbar'>
                    <div className='navbar-logo'>
                        <Link to="/home"> <img className='logo-home' src="/images/logo.png"/> </Link> 
                    </div>
                    <div className='navbar-main'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/drinks'>Drinks</Link></li>
                        <li><a href='https://www.toasttab.com/bubblebear-tea-160-walt-whitman-rd-1017/v3'>Order</a></li>
                    </div>
                </nav>
            </div> */}
            <div>
                <h1 className='home-h1'>Entering Bubble Bear Tea</h1>
                <h3 className='home-h3'>Expanding the possibilities of tea. <br></br>Freshly brewed loose leaf tea paired with honey coated boba.</h3>
            </div>
        </div>
    )
}

export default connect(state => state)(Home)