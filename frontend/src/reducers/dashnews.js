import {authConstants} from "../actions/types";

const initialState = {
    dashnews: []
}

export default function dashnews (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case authConstants.GET_DASHNEWS_SUCCESS:
            return {
                ...state,
                dashnews: payload
            }
        case authConstants.GET_DASHNEWS_FAIL:
            return {
                ...state,
            }
        default:
            return state;
    }
}