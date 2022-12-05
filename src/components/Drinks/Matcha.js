import React from 'react';
import { connect } from 'react-redux';

const Matcha = ({ matcha }) => {
    return (
        <div>
           <h1 className='drinksh1'>Bear Matcha Latte</h1>
           <div className='drinks-main'>
                {
                    matcha.map(matcha => {
                        return (
                            <div className='drink'>
                            <li key={matcha.id} className='drinks-image'>
                                <img src={matcha.imageUrl}/>
                            </li>
                            <li key={matcha.id} className='drink-info'>
                                { matcha.name }
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
        matcha: state.drinks.filter(drink => drink.category === "Bear Matcha"),
    }
}

export default connect(mapState)(Matcha)