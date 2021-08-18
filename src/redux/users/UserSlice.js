import { EDIT_USER } from "./types"

let initialState = {
    userInfo: {
        name: 'karen'
    }
}

export function UserReducer(state = initialState, action) {
    switch (action.type) {
        case EDIT_USER: return {
            ...state, userInfo: {
                name: action.payload.name
            }
        }
        default: return state
    }
}

export function editUser(value) {
    return {
        type  : EDIT_USER,
        payload : {
            name : value
        }
    }
}



// iotech