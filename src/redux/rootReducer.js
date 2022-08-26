import { combineReducers } from "redux";
import { apiReducer } from "./reducer/api.reducer";


export const rootReducer = combineReducers({
    books : apiReducer
})