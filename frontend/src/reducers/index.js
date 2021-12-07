import {authConstants} from "../actions/types";

const initialState = {
    send_status: null,
    feedbacks: []
}

export default function index (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case authConstants.FEEDBACK_GET_SUCCESS:
            return {
                ...state,
                feedbacks: payload
            }
        case authConstants.FEEDBACK_GET_FAIL:
            return {
                ...state,
            }
        case authConstants.FEEDBACK_SEND_SUCCESS:
            return {
                ...state,
                send_status: "success"
            }
        case authConstants.FEEDBACK_SEND_FAIL:
            return {
                ...state,
                send_status: "fail"
            }
        default:
            return state;
    }
}