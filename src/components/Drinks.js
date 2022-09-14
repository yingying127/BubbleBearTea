import React from 'react';
import { connect } from 'react-redux';

const Drinks = ({ drinks }) => {
    return (
        <div>
            <h2>Drinks</h2>
            <div>
               {drinks.map(drink => {
                return (
                    <p key={ drink.id }>
                        {drink.name}
                    </p>
                )
               })}
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