import {Action} from './action'
// THIS ACTION SET PERSONS NUMBER

export const setUser = (user) => {
    return {
        type: Action.SET_USER,
        payload: user
    }
}