import React from 'react';
import { connect } from 'react-redux';

const MilkTea = ({ milkTea }) => {
    return (
        <div>
            <h1 className='drinksh1'>Bear Milk Tea</h1>
            <div className='drinks-main'>
                {
                    milkTea.map(milk => {
                        return (
                            <div className='drink'>
                            <li key={milk.id} className='drinks-image'>
                                <img src={milk.imageUrl}/>
                            </li>
                            <li key={milk.id} className='drink-info'>
                                { milk.name }
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
        milkTea: state.drinks.filter(drink => drink.category === "Bear Milk Tea"),
    }
}

export default connect(mapState)(MilkTea)