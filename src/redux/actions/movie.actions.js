import { GET_ERROR, SET_MOVIE, SET_MOVIES } from "../types.redux";
import axios from 'axios';

const API_URI = `https://api.themoviedb.org/3`

export const AllMovies = (string, page_number) => dispatch => {
    if (string.length > 0) {
        axios.get(`${API_URI}/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${string}&language=en-US&page=${page_number}&include_adult=false`)
            .then(ress => {
                dispatch({ type: SET_MOVIES, payload: ress.data })
            })
            .catch(err => {
                dispatch({ type: GET_ERROR, payload: err.response.data })
            })
    } else {
        axios.get(`${API_URI}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page_number}`)
            .then(ress => {
                dispatch({ type: SET_MOVIES, payload: ress.data })
            })
            .catch(err => {
                dispatch({ type: GET_ERROR, payload: err.response.data })
            })
    }
}

export const getMovieById = (id) => dispatch => {
    axios.get(`${API_URI}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        .then(ress => {
            dispatch({ type: SET_MOVIE, payload: ress.data })
        })
        .catch(err => {
            dispatch({ type: GET_ERROR, payload: err.response.data })
        })
}
