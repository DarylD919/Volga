import Axios from 'axios';
import { MARK_ADD_ITEM, MARK_REMOVE_ITEM } from '../constants/markConstants';

export const addToBookMark = (bookId) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/books/${bookId}`);
    dispatch ({
        type: MARK_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            category: data.category,
            description: data.description,
            stock: data.stock,
            book: data._id,
        },
    });
    localStorage.setItem('bookMarks', JSON.stringify(getState().mark.bookMarks));
}

export const removeFromMark = (bookId) => (dispatch, getState) => {
    dispatch ({ type: MARK_REMOVE_ITEM, payload: bookId});
    localStorage.setItem('bookMarks', JSON.stringify(getState().mark.bookMarks));
}