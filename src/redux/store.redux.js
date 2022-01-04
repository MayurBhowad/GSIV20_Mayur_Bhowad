
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducres';

const initialState = {}

const middleware = [thunk]

let devTools = process.env.NODE_ENV === 'development' ?
    compose(
        applyMiddleware(...middleware),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ) :
    compose(
        applyMiddleware(...middleware),
    )

const store = createStore(
    reducers,
    initialState,
    devTools
)

export default store;