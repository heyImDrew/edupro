import {combineReducers} from "redux";
import login from "./login";
import index from "./index"
import account from "./account";
import dashnews from "./dashnews"
import desks from "./desks";
import desks_create from "./desks_create";
import cards_add from "./cards_add";

export const rootReducer = combineReducers({
    login,
    index,
    account,
    dashnews,
    desks_create,
    desks,
    cards_add,
});