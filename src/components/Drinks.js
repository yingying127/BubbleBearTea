import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

const Drinks = ({ drinks }) => {
    return (
        <div>
            <Navbar />
            <div className='drinks-main'>
                <div className='drinks-banner'></div>
                <div>
                    <h1>Bear Milk Tea</h1>
                    <p className='drinks-individual'>
                        
                    </p>
                </div>
                <div>
                    <h1>Bear Fruit Tea</h1>
                </div>
                <div>
                    <h1>Bear Matcha Latte</h1>
                </div>
                <div>
                    <h1>Bear Speciality Drinks</h1>
                </div>
                <div>
                    <h1>Bear Slush</h1>
                </div>
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