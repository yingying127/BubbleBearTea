import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import MilkTea from './Drinks/MilkTea';
import FruitTea from './Drinks/FruitTea';
import Matcha from './Drinks/Matcha';
import Speciality from './Drinks/Speciality';
import Slush from './Drinks/Slush';

const Drinks = ({}) => {
    return (
        <div>
            <Navbar />
            <div className='drinks-home'>
                <div className='drinks-banner'></div>
                <MilkTea />
                <FruitTea />
                <Matcha />
                <Speciality />
                <Slush />
            </div>
        </div>
    )
}


export default connect(state => state)(Drinks)