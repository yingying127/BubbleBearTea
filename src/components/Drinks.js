import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

const Drinks = ({ drinks }) => {
    return (
        <div>
            <Navbar />
            <div className='drinks-banner'></div>
            <h2>Drinks</h2>
            <div>
                
            </div>
            <div>
               <p>Bear Milk Tea</p>
               <p>Bear Fruit Tea</p>
               <p>Bear Cap</p>
               <p>Bear Slush</p>
            </div>
        </div>
    )
}

const mapState = (state) => {
    console.log(state.drinks, 'state')
    return {
        drinks: state.drinks
    }
}

export default connect(mapState)(Drinks)