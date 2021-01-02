import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listBooks, createBook, deleteBook } from '../actions/bookActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { BOOK_CREATE_RESET, BOOK_DELETE_RESET } from '../constants/bookConstants';

export default function BookListPage(props) {
    const bookList = useSelector((state) => state.bookList);
    const { loading, error, books } = bookList;

    const bookDelete = useSelector((state) => state.bookDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete
    } = bookDelete;

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
        if(successDelete){
            dispatch({ type: BOOK_DELETE_RESET });
        }
        dispatch(listBooks());
    }, [dispatch, createdBook, props.history, successCreate, successDelete]);

    const deleteHandler = (book) => {
        //Delete handler
        if (window.confirm('Delete confirm?')){
            dispatch(deleteBook(book._id));
        }
    };

    const createHandler = () => {
        dispatch(createBook());
    }
    return (
        <div>
            <div className="row">
                <h1>Books</h1>
                <button type="button" className="primary" onClick={createHandler}>
                    Create
                </button>
            </div>

            {loadingDelete && <LoadingBox></LoadingBox>}
            {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

            {loadingCreate && <LoadingBox></LoadingBox>}
            {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Reviews</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr key={book._id}>
                                <td>{book._id}</td>
                                <td>{book.name}</td>
                                <td>{book.category}</td>
                                <td>{book.numReviews}</td>
                                <td>
                                    <button 
                                        type="button"
                                        className="primary block"
                                        onClick={() => 
                                            props.history.push(`/book/${book._id}/edit`)
                                        }>Edit</button>
                                        <button 
                                            type="button"
                                            className="cube"
                                            onClick={() => deleteHandler(book)}
                                        >Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
