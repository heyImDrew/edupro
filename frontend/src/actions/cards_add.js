import axios from "axios";
import {authConstants} from "./types";
import {toast} from "react-toastify";

const HOST = "http://localhost:9000/api/"


export const cards_add = (data) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    };
    try {
        const res = await axios.post(HOST + "cards/add/", {
            "desk_id": data.desk_id,
            "question": data.card_q,
            "answer": data.card_a,
        }, config)
        toast.success("Card successfully added!")
        dispatch({
            type: authConstants.CARDS_ADD_SUCCESS,
            payload: res.data.card_id
        })
    } catch (err) {
        dispatch({
            type: authConstants.CARDS_ADD_FAIL
        })
    }
}