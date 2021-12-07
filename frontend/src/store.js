import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./reducers/root";


const initialState = {};
const middleware = [thunk];
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;