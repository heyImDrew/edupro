import {authConstants} from "./types"
import axios from "axios";

const HOST = "http://localhost:9000/api/"

export const load_dashnews = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    };
    try {
        const res = await axios.get(HOST + "dashnews/", config)
        const randres = await axios.get(HOST + "desks/random/", config)
        dispatch({
            type: authConstants.GET_DASHNEWS_SUCCESS,
            payload: {data: res.data, random_desk_data: randres.data}
        })

    } catch (err) {
        dispatch({
            type: authConstants.GET_DASHNEWS_FAIL
        })
    }
}