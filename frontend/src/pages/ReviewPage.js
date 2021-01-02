import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listBooks } from '../actions/bookActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { BOOK_CREATE_RESET } from '../constants/bookConstants';

export default function ReviewPage(props) {
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

    const dispatch = useDispatch();
    useEffect(() => {
        if (successCreate) {
            dispatch({ type: BOOK_CREATE_RESET });
            props.history.push(`/book/${createdBook._id}/edit`);
        }
        dispatch(listBooks());
    }, [dispatch, createdBook, props.history, successCreate]);

    const createHandler = () => {
        dispatch(createdBook());
    }

    return (
        <div>
            <div className="row">
                <h1>Review {book.name}</h1>
                <button type="button" className="primary" onClick={createHandler}>
                    Add book
                </button>
            </div>
            {loadingCreate && <LoadingBox></LoadingBox>}
            {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
            <p>
                {userInfo.name} : {book.name}
            </p>
        </div>
    );
}
