import {authConstants} from "../actions/types";

const initialState = {
    favourites: {
        courses: {data: []},
        desks: {data: []}
    }
}

export default function fav (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case authConstants.GET_DATA_SUCCESS:
            return {
                ...state,
                favourites: payload
            }
        case authConstants.GET_DATA_FAIL:
            return {
                ...state,
            }
        default:
            return state;
    }
}