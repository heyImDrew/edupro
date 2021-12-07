import {authConstants} from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null
}

export default function login (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case authConstants.LOGIN_SUCCESS:
            localStorage.setItem('token', payload.access);
            return {
                ...state,
                isAuthenticated: true,
            }
        case authConstants.LOGIN_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false
            }
        case authConstants.GET_USER_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case authConstants.GET_USER_FAIL:
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
            }
        default:
            return state;
    }
}