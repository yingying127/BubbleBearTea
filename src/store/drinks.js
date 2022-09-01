import axios from 'axios'

const LOAD_DRINKS = 'LOAD_DRINKS';
const DELETE_DRINKS = 'DELETE_DRINKS';
const CREATE_DRINKS = 'CREATE_DRINKS';
const UPDATE_DRINKS = 'UPDATE_DRINKS';

const _loadDrinks = (drinks) => { return { type: LOAD_DRINKS, drinks }}
const _deleteDrinks = (drinks) => { return { type: DELETE_DRINKS, drinks }}
const _createDrinks = (drinks) => { return { type: CREATE_DRINKS, drinks }}
const _updateDrinks = (drinks) => { return { type: UPDATE_DRINKS, drinks }}

export const loadDrinks = () => {
    return async(dispatch) => {
        const drinks = (await axios.get('/api/drinks')).data
        dispatch(_loadDrinks(drinks))
    }
}

const drinks = (state = [], action) => {
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

export default drinks