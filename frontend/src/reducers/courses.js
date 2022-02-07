import {authConstants} from "../actions/types";

const initialState = {
    courses: []
}

export default function courses (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case authConstants.GET_COURSES_SUCCESS:
            return {
                ...state,
                courses: payload
            }
        case authConstants.GET_COURSES_FAIL:
            return {
                ...state,
            }
        default:
            return state;
    }
}