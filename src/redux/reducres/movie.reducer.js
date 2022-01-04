import { SET_MOVIE, SET_MOVIES } from "../types.redux";

const initialState = {
    movie: {},
    movies: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_MOVIE:
            return {
                ...state,
                movie: action.payload
            };
        case SET_MOVIES:
            return {
                ...state,
                movies: action.payload
            };
        default:
            return state;
    }
}