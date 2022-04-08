import { createStore } from 'redux';

import Action from './action';

// Initial User
const initialState = {
    user: []
}
const personReducer = (state = initialState, { type, payload
}) => {
    switch (type) {
        case Action.SET_USER:
            return {
                ...state, user: payload
            }
        case Action.SELECT_USER:
            return {
                ...state,
                user: payload
            }
        default:
        return state;
         
    }
}

const store = createStore(personReducer)

export default store;

