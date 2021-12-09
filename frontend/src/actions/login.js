import {authConstants} from "./types"
import axios from "axios";
import {toast} from "react-toastify";

const HOST = "http://localhost:9000/api/"

export const load_user = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    };
    try {
        const res = await axios.get(HOST + "users/", config)
        // if (res.status === 401) {
        //     throw "Credentials are not correct.";
        // }
        dispatch({
            type: authConstants.GET_USER_SUCCESS,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: authConstants.GET_USER_FAIL
        })
    }
}

export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': "application/json",
        }
    };
    const data = JSON.stringify({ username, password });
    try {
        const res = await axios.post(HOST + "token/", data, config)
        dispatch({
            type: authConstants.LOGIN_SUCCESS,
            payload: res.data
        })
        toast.success("Successfully logged in!")
        dispatch(load_user());


    } catch (err) {
        toast.error("Invalid credentials.")
        dispatch({
            type: authConstants.LOGIN_FAIL
        })
    }
};

export const logout = () => dispatch => {
    dispatch({
        type: authConstants.LOGOUT_SUCCESS
    })
};