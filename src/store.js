import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const LOAD_DRINKS = 'LOAD_DRINKS';
const DELETE_DRINKS = 'DELETE_DRINKS';
const CREATE_DRINKS = 'CREATE_DRINKS';
const UPDATE_DRINKS = 'UPDATE_DRINKS';

const LOAD_TOPPINGS = 'LOAD_TOPPINGS';
const DELETE_TOPPINGS = 'DELETE_TOPPINGS';
const CREATE_TOPPINGS = 'CREATE_TOPPINGS';
const UPDATE_TOPPINGS = 'UPDATE_TOPPINGS';

const drinkReducer = (state = [], action) => {
    if (action.type === LOAD_DRINKS) {
        state = action.drinks
    }
    if (action.type === DELETE_DRINKS) {
        state = state.filter(drinks => drinks.id !== action.drinks.id)
    }
    if (action.type === CREATE_DRINKS) {
        state = [...state, action.drinks]
    }
    if (action.type === UPDATE_DRINKS) {
        state = state.map(drinks => drinks.id !== action.drinks.id ? drinks : action.drinks)
    }
    return state;
}

const toppingReducer = (state = [], action) => {
    if (action.type === LOAD_DRINKS) {
        state = action.toppings
    }
    if (action.type === DELETE_TOPPINGS) {
        state = state.filter(toppings => toppings.id !== action.toppings.id)
    }
    if (action.type === CREATE_TOPPINGS) {
        state = [...state, action.toppings]
    }
    if (action.type === UPDATE_TOPPINGS) {
        state = state.map(toppings => toppings.id !== action.toppings.id ? toppings : action.toppings)
    }
    return state;
}

const reducer = combineReducers({
    drinks: drinkReducer,
    toppings: toppingReducer
})

const store = createStore(reducer, applyMiddleware(thunk, logger))

const _loadDrinks = (drinks) => { return { type: LOAD_DRINKS, drinks }}
const _deleteDrinks = (drinks) => { return { type: DELETE_DRINKS, drinks }}
const _createDrinks = (drinks) => { return { type: CREATE_DRINKS, drinks }}
const _updateDrinks = (drinks) => { return { type: UPDATE_DRINKS, drinks }}

const _loadToppings = (toppings) => { return { type: LOAD_TOPPINGS, toppings }}
const _deleteToppings = (toppings) => { return { type: DELETE_TOPPINGS, toppings }}
const _createToppings = (toppings) => { return { type: CREATE_TOPPINGS, toppings }}
const _updateToppings = (toppings) => { return { type: UPDATE_TOPPINGS, toppings }}

const loadDrinks = () => {
    return async(dispatch) => {
        const drinks = (await axios.get('/api/drinks')).data
        dispatch(_loadDrinks(drinks))
    }
}

const loadToppings = () => {
    return async(dispatch) => {
        const toppings = (await axios.get('/api/toppings')).data
        dispatch(_loadToppings(toppings))
    }
}

export default store;
export { 
    loadDrinks,
    loadToppings
}