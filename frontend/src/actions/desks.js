import {authConstants} from "./types"
import axios from "axios";

const HOST = "http://localhost:9000/api/"

export const load_desks = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    };
    try {
        const res = await axios.get(HOST + "desks/", config)
        dispatch({
            type: authConstants.GET_DESKS_SUCCESS,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: authConstants.GET_DESKS_FAIL
        })
    }
}