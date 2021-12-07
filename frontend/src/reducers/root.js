import {combineReducers} from "redux";
import login from "./login";
import index from "./index"

export const rootReducer = combineReducers({
    login,
    index,
});