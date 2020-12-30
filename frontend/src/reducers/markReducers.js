import { MARK_ADD_ITEM, MARK_REMOVE_ITEM } from '../constants/markConstants';

export const markReducer = (state = { bookMarks: [] }, action) => {
    switch(action.type) {
        case MARK_ADD_ITEM:
            const item = action.payload;
            const existItem = state.bookMarks.find((x) => x.book === item.book);
            if (existItem){
                return {
                    ...state,
                    bookMarks: state.bookMarks.map((x) => 
                    x.book === existItem.book ? item : x
                    ),
                };
            } else {
                return { ...state, bookMarks: [...state.bookMarks, item] };
            }

        case MARK_REMOVE_ITEM:
            return {
                ...state, bookMarks: state.bookMarks.filter((x) => x.book !== action.payload),
            };
            default: 
                return state;
    }
};