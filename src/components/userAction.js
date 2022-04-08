import {Action} from '../action'
export const selectedUser = (user) => {
    return {
        type: Action.SELECT_USER,
        payload: user,
    }
}