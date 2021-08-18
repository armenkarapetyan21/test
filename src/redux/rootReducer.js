import { combineReducers } from "redux";
import { UserReducer } from "./users/UserSlice";


export const rootReducer = combineReducers({
    users : UserReducer,
    
})