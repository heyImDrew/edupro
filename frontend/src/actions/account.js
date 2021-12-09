import {authConstants} from "./types"
import axios from "axios";

const HOST = "http://localhost:9000/api/"

export const load_account = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    };
    try {

        const res = await axios.get(HOST + "users/information/", config)
        const res2 = await axios.get(HOST + "cards/amount/", config)
        dispatch({
            type: authConstants.GET_USER_INFO_SUCCESS,
            payload: {data: res.data, amount: res2.data}
        })

    } catch (err) {
        dispatch({
            type: authConstants.GET_USER_INFO_FAIL
        })
    }
}