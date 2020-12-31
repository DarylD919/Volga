import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { markReducer } from './reducers/markReducers';
import 
{ 
    bookDetailsReducer, 
    bookListReducer,
 } from './reducers/bookReducers';
import { userDetailsReducer, userRegisterReducer, userSigninReducer } from './reducers/userReducers';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
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
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;