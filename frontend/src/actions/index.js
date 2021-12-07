import {authConstants} from "./types"
import axios from "axios";

const HOST = "http://localhost:9000/api/"

export const load_feedbacks = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': "application/json"
        }
    };
    try {
        const res = await axios.get(HOST + "feedbacks/show/multiple/", config)
        dispatch({
            type: authConstants.FEEDBACK_GET_SUCCESS,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: authConstants.FEEDBACK_GET_FAIL
        })
    }
}

export const send_feedback = (full_name, email, phone, message) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': "application/json"
        }
    };
    try {
        let request_body = {
            "full_name": full_name,
            "email": email,
            "phone": phone,
            "message": message
        }
        const res = await axios.post(HOST + "feedbacks/send/", request_body, config)
        if (res.data.status !== "success") {
            throw "Something went wrong.."
        }
        dispatch({
            type: authConstants.FEEDBACK_SEND_SUCCESS,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: authConstants.FEEDBACK_SEND_FAIL
        })
    }
}