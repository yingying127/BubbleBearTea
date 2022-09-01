import axios from 'axios'

const LOAD_TOPPINGS = 'LOAD_TOPPINGS';
const DELETE_TOPPINGS = 'DELETE_TOPPINGS';
const CREATE_TOPPINGS = 'CREATE_TOPPINGS';
const UPDATE_TOPPINGS = 'UPDATE_TOPPINGS';

const _loadToppings = (toppings) => { return { type: LOAD_TOPPINGS, toppings }}
const _deleteToppings = (toppings) => { return { type: DELETE_TOPPINGS, toppings }}
const _createToppings = (toppings) => { return { type: CREATE_TOPPINGS, toppings }}
const _updateToppings = (toppings) => { return { type: UPDATE_TOPPINGS, toppings }}

export const loadToppings = () => {
    return async(dispatch) => {
        const toppings = (await axios.get('/api/toppings')).data
        dispatch(_loadToppings(toppings))
    }
}

export const toppings = (state = [], action) => {
    if (action.type === LOAD_TOPPINGS) {
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

export default toppings