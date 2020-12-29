import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import 
{ 
    bookDetailsReducer, 
    bookListReducer,
 } from './reducers/bookReducers';

const initialState = {};
const reducer = combineReducers({
    bookList: bookListReducer,
    bookDetails: bookDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;