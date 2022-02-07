import {authConstants} from "../actions/types";

const initialState = {
    course: {
        partitions: []
    }
}

export default function course_page (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case authConstants.GET_COURSE_SUCCESS:
            return {
                ...state,
                course: payload
            }
        case authConstants.GET_COURSE_FAIL:
            return {
                ...state,
            }
        default:
            return state;
    }
}