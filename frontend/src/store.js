import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { markReducer } from './reducers/markReducers';
import 
{ 
    bookDetailsReducer, 
    bookListReducer,
 } from './reducers/bookReducers';

const initialState = {
    mark: {
        bookMarks: localStorage.getItem('bookMarks')
        ? JSON.parse(localStorage.getItem('bookMarks'))
        : [],
    },
};

// const initialState= {}

const reducer = combineReducers({
    bookList: bookListReducer,
    bookDetails: bookDetailsReducer,
    mark: markReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;