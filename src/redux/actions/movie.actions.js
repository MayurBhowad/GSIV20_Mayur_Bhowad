import { GET_ERROR, SET_MOVIE, SET_MOVIES } from "../types.redux";
import axios from 'axios';

const API_URI = `https://api.themoviedb.org/3/movie`

export const AllMovies = () => dispatch => {
    axios.get(`${API_URI}/popular?api_key=${process.env.REACT_APP_API_KEY}&page=1`)
        .then(ress => {
            dispatch({ type: SET_MOVIES, payload: ress.data })
        })
        .catch(err => {
            dispatch({ type: GET_ERROR, payload: err.response.data })
        })
}

export const getMovieById = (id) => dispatch => {
    axios.get(`${API_URI}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        .then(ress => {
            dispatch({ type: SET_MOVIE, payload: ress.data })
        })
        .catch(err => {
            dispatch({ type: GET_ERROR, payload: err.response.data })
        })
}
