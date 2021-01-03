import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createBook, detailsBook, listBooks } from '../actions/bookActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { BOOK_CREATE_RESET, BOOK_UPDATE_RESET } from '../constants/bookConstants';

export default function ReviewPage(props) {
    const bookId = props.match.params.id;
    const [review, setReview] = useState('');

    const bookDetails = useSelector((state) => state.bookDetails);
    const { book } = bookDetails;


    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const bookCreate = useSelector((state) => state.bookCreate);
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        book: createdBook
    } = bookCreate;

    const bookUpdate = useSelector((state) => state.bookUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = bookUpdate;

    const dispatch = useDispatch();
    useEffect(() => {
        if (successUpdate){
            dispatch({ type: BOOK_CREATE_RESET });
            props.history.push(`/book/${createdBook._id}/create`);
            // props.history.push('/booklist');
        }
        if (!book || book._id !== bookId || successUpdate) {
            dispatch({ type: BOOK_UPDATE_RESET });
            dispatch(detailsBook(bookId));
            dispatch(listBooks());
        } else {
            setReview(book.review);
        }
    }, [book, dispatch, bookId, successUpdate, props.history, successCreate, createdBook]);


    const createHandler = () => {
        dispatch(createBook());
    }

    return (
        <div>
            <div className="row">
                <h1>Review</h1>
                <button type="button" className="primary" onClick={createHandler}>
                    Create
                </button>
            </div>
            {loadingCreate && <LoadingBox></LoadingBox>}
            {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
            <div>
                <form className="form">
                <h1>Review </h1>
                <div>
                    <label htmlFor="review">Review:</label>
                    <textarea
                        id="review"
                        rows="5"
                        type="text"
                        placeholder="Review"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    ></textarea>
                </div>
                <button type="button" className="primary">Post Review</button>
                </form>
            </div>
        </div>
    );
}
