import React from 'react';
import { connect } from 'react-redux';

const Slush = ({ slush }) => {
    return (
        <div>
            <h1 className='drinksh1'>Bear Slush</h1>
            <div className='drinks-main'>
                {
                    slush.map(slush => {
                        return (
                            <div className='drink'>
                            <li key={slush.id} className='drinks-image'>
                                <img src={slush.imageUrl}/>
                            </li>
                            <li key={slush.id} className='drink-info'>
                                { slush.name }
                            </li>
                            </div>
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