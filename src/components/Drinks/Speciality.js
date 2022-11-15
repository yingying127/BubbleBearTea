import React from 'react';
import { connect } from 'react-redux';

const Speciality = ({ specialty }) => {
    return (
        <div>
            <h1 className='drinksh1'>Bear Speciality Drinks</h1>
            <div className='drinks-main'>
                {
                    specialty.map(specialty => {
                        return (
                            <li key={specialty.id} className='drink'>
                                { specialty.name }
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
        specialty: state.drinks.filter(drink => drink.category === "Bear Specialty"),
    }
}

export default connect(mapState)(Speciality)