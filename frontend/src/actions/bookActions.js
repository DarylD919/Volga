import Axios from'axios';
import 
{   
    BOOK_DETAILS_FAIL,
    BOOK_DETAILS_REQUEST,
    BOOK_DETAILS_SUCCESS,
    BOOK_LIST_FAIL, 
    BOOK_LIST_REQUEST, 
    BOOK_LIST_SUCCESS,
} from '../constants/bookConstants';


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

export const detailsBook = (bookId) => async (dispatch) => {
    dispatch({ type: BOOK_DETAILS_REQUEST, payload: bookId});
    try {
        const { data } = await Axios.get(`/api/books/${bookId}`);
        dispatch({ type: BOOK_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch ({
            type: BOOK_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
}