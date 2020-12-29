import Axios from 'axios';
import { MARK_ADD_ITEM } from '../constants/markConstants';

export const addToBookMark = (bookId, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/books/${bookId}`);
    dispatch ({
        type: MARK_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            category: data.category,
            stock: data.stock,
            book: data._id,
            qty,
        },
    });
    localStorage.setItem('bookMarks', JSON.stringify(getState().mark.bookMarks));
}