import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsBook } from '../actions/bookActions';
import Rating from '../components/Rating';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';


export default function BookPage(props) {
    const dispatch = useDispatch();
    const bookId = props.match.params.id;
    const bookDetails = useSelector((state) => state.bookDetails);
    const { loading, error, book } = bookDetails;

    const addToReviewHandler = () => {
        props.history.push(`/signin?redirect=/review/${bookId}`);
    }

    const addToBookMarkHandler = () => {
        //props.history.push('/signin?redirect=bookmark');
        props.history.push(`/signin?redirect=/bookmark/${bookId}`);
    }

    useEffect(() => {
        dispatch(detailsBook(bookId));
    }, [dispatch, bookId]);



    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
            <div>
                <div className="row top">
                    <div className="col-2">
                        <img 
                            className="medium" 
                            src={book.image} 
                            alt={book.name}
                        ></img>
                    </div>
                    <div className="col-1">
                        <div className="card card-body">
                            <ul>
                            <Rating
                                rating={book.rating}
                                numReviews={book.numReviews}
                            ></Rating>
                            <p className="category"><strong>{book.category}</strong></p>
                            <li>
                                <h1>{book.name}</h1>
                            </li>
                            <li><strong>Description:</strong>
                                <p>{book.description}</p>
                            </li>
                            </ul>
                            <ul className="btn">
                                <li>
                                    <button onClick={addToReviewHandler} className="primary block">Review</button>
                                    <button onClick={addToBookMarkHandler} className="primary cube">Save for later</button>
                                </li>            
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="card card-body">
                        <strong>Reviews:</strong>
                        <p>{book.review}</p>
                    </div>
                </div>
            </div>
        )}
        </div>
    );
}
