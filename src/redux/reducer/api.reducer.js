
import * as ActionTypes from '../ActionTypes'


const initVal = {
    data: []
}

export const apiReducer = (state = initVal, action) =>{
    switch (action.type) {
        case ActionTypes.READ_DATA:
            return{
                ...state,
                data: action.payload,
            }
        default: return state
    }
}

