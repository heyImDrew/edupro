import {authConstants} from "../actions/types";

const initialState = {
        account: {
            data: '',
            amount: '',
            amount_2: '',
    }
}

export default function account (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case authConstants.GET_USER_INFO_SUCCESS:
            return {
                ...state,
                account: payload
            }
        case authConstants.GET_USER_INFO_FAIL:
            return {
                ...state,
            }
        default:
            return state;
    }
}