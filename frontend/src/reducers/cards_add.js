import {authConstants} from "../actions/types";

const initialState = {
    card_id: null,
}

export default function cards_add (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case authConstants.CARDS_ADD_SUCCESS:
            return {
                ...state,
                card_id: payload
            }
        case authConstants.CARDS_ADD_FAIL:
            return {
                ...state,
            }
        default:
            return state;
    }
}