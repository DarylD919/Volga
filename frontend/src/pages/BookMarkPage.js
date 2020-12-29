import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToBookMark } from '../actions/markActions';


export default function BookMarkPage(props) {
    const bookId = props.match.params.id;
    const qty = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;
    const bookDetails = useSelector((state) => state.bookDetails);
    const { book } = bookDetails;

    const dispatch = useDispatch();
    useEffect(() => {
        if (bookId) {
            dispatch(addToBookMark(bookId, qty));
        }
    }, [dispatch, bookId, qty]);

    return (
        <div>
            <h1>Books you the user have saved</h1>
            <p>
                UserID/Name : {book.name} Qty:{qty}
            </p>
        </div>
    );
}
