import * as ActionTypes from '../ActionTypes'

export const readData = (data) =>{
    return({type: ActionTypes.READ_DATA, payload: data})
}