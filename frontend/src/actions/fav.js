import {authConstants} from "./types"
import axios from "axios";

const HOST = "http://localhost:9000/api/"

export const load_fav = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    };
    try {
        const courses_res = await axios.get(HOST + "courses/", config)
        const desks_res = await axios.get(HOST + "desks/", config)
        dispatch({
            type: authConstants.GET_DATA_SUCCESS,
            payload: {'courses': courses_res, 'desks': desks_res}
        })

    } catch (err) {
        dispatch({
            type: authConstants.GET_DATA_FAIL
        })
    }
}