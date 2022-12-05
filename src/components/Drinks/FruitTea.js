import React from 'react';
import { connect } from 'react-redux';
import drinks from '../../store/drinks';

const FruitTea = ({ fruitTea }) => {
    return (
        <div>    
            <h1 className='drinksh1'>Bear Fruit Tea</h1>
            <div className='drinks-main'>
                {
                    fruitTea.map(fruit => {
                        return (
                            <div className='drink'>
                            <li key={fruit.id} className='drinks-image'>
                                <img src={fruit.imageUrl}/>
                            </li>
                            <li key={fruit.id} className='drink-info'>
                                { fruit.name }
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
        fruitTea: state.drinks.filter(drink => drink.category === "Bear Fruit Tea"),
    }
}

export default connect(mapState)(FruitTea)