import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import errorReducer from "./error.reducer";


const reducers = combineReducers({
    movie: movieReducer,
    error: errorReducer,
})

export default reducers;