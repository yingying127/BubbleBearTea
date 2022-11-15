import React from 'react';
import { connect } from 'react-redux';

const Slush = ({ slush }) => {
    return (
        <div>
            <h1 className='drinksh1'>Bear Slush Tea</h1>
            <div className='drinks-main'>
                {
                    slush.map(slush => {
                        return (
                            <li key={slush.id} className='drink'>
                                { slush.name }
                            </li>
                        )
                    })
                }   
            </div>
        </div>
    )
}

const mapState = (state) => {
    return {
        slush: state.drinks.filter(drink => drink.category === "Bear Slush"),
    }
}

export default connect(mapState)(Slush)