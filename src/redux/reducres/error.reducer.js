import { CLEAR_ERROR, GET_ERROR } from "../types.redux";

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ERROR:
            return action.payload
        case CLEAR_ERROR:
            return {}
        default:
            return state;
    }
}