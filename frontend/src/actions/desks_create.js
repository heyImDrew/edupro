import axios from "axios";
import {authConstants} from "./types";
import {toast} from "react-toastify";

const HOST = "http://localhost:9000/api/"


export const desks_create = (data) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    };
    try {
        const res = await axios.post(HOST + "desks/add/", {
            "name": data.desk.desk_h,
            "description": data.desk.desk_h,
        }, config)
        if (res.data.desk_id != null) {
            console.log(data.cards[0])
            let card_res_1 = await axios.post(HOST + "cards/add/", {
                "desk_id": res.data.desk_id,
                "question": data.cards[0].card_1_q,
                "answer": data.cards[0].card_1_a,
            }, config)

            let card_res_2 = await axios.post(HOST + "cards/add/", {
                "desk_id": res.data.desk_id,
                "question": data.cards[1].card_2_q,
                "answer": data.cards[1].card_2_a,
            }, config)

            let card_res_3 = await axios.post(HOST + "cards/add/", {
                "desk_id": res.data.desk_id,
                "question": data.cards[2].card_3_q,
                "answer": data.cards[2].card_3_a,
            }, config)

        }
        else {
            throw "Something happened during desk creation..";
        }
        toast.success("Desk successfully created!")
        dispatch({
            type: authConstants.CREATE_DESKS_SUCCESS,
            payload: res.data.desk_id
        })
    } catch (err) {
        dispatch({
            type: authConstants.CREATE_DESKS_FAIL
        })
    }
}