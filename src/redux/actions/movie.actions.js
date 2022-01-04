import { GET_ERROR, SET_MOVIES } from "../types.redux";
import axios from 'axios';

const API_URI = process.env.REACT_APP_API_URL

export const AllMovies = () => dispatch => {
    axios.get(API_URI)
        .then(ress => {
            dispatch({ type: SET_MOVIES, payload: ress.data })
        })
        .catch(err => {
            dispatch({ type: GET_ERROR, payload: err.response.data })
        })
}
