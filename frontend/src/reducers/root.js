import {combineReducers} from "redux";
import login from "./login";
import index from "./index"
import account from "./account";
import dashnews from "./dashnews"
import desks from "./desks";
import desks_create from "./desks_create";
import cards_add from "./cards_add";
import courses from "./courses"
import course_page from "./course_page";
import fav from "./fav"

export const rootReducer = combineReducers({
    login,
    index,
    account,
    dashnews,
    desks_create,
    desks,
    cards_add,
    courses,
    course_page,
    fav,
});