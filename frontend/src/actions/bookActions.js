import Axios from'axios';
import { BOOK_LIST_FAIL, BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS } from '../constants/bookConstants';


export const listBooks = () => async (dispatch) => {
    dispatch({
        type: BOOK_LIST_REQUEST,
    });
    try{
        const { data } = await Axios.get('/api/books');
        dispatch({ type: BOOK_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch ({ type: BOOK_LIST_FAIL, payload: error.message});
    }
};