import {authConstants} from "../actions/types";

const initialState = {
    desks: []
}

export default function desks (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case authConstants.GET_DESKS_SUCCESS:
            return {
                ...state,
                desks: payload
            }
        case authConstants.GET_DESKS_FAIL:
            return {
                ...state,
            }
        default:
            return state;
    }
}