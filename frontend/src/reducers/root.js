import {combineReducers} from "redux";
import login from "./login";
import index from "./index"
import account from "./account";
import dashnews from "./dashnews"
import desks from "./desks";

export const rootReducer = combineReducers({
    login,
    index,
    account,
    dashnews,
    desks,
});