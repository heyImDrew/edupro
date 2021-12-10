import {authConstants} from "../actions/types";

const initialState = {
    desk_id: null,
}

export default function desks_create (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case authConstants.CREATE_DESKS_SUCCESS:
            return {
                ...state,
                desk_id: payload
            }
        case authConstants.CREATE_DESKS_FAIL:
            return {
                ...state,
            }
        default:
            return state;
    }
}