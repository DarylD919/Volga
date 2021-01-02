import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToBookMark, removeFromMark } from '../actions/markActions';
import MessageBox from '../components/MessageBox';


export default function BookMarkPage(props) { 
    const bookId = props.match.params.id;

    const mark = useSelector((state) => state.mark);
    const { bookMarks } = mark;

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const dispatch = useDispatch();
    useEffect(() => {
        if (bookId) {
            dispatch(addToBookMark(bookId));
        }
    }, [dispatch, bookId]);

    const removeFromMarkHandler = (id) => {
        dispatch(removeFromMark(id));
    };

    const reviewOutHandler = () => {
        props.history.push('/signin?redirect=review');
    }

    return (
        <div>
            <div>
                <h1>{userInfo.name} books you have saved</h1>
                {bookMarks.length === 0 ? (
                    <MessageBox>No books saved. <Link to="/">Back</Link></MessageBox>
                ) : (
                    <div>
                        {bookMarks.map((item) => (
                        <div className="card card-body">

                            <div key={item.book}>
                                <div className="row top">
                                    <div className="col-2">
                                        <img src={item.image} alt={item.name} className="small-mark"></img>
                                    </div>
                                    <div className="col-1">
                                        <div >
                                            <Link to={`/book/${item.book}`}><h1>{item.name}</h1></Link>
                                            <br />
                                        </div>
                                        <strong>Description:</strong> <br />{item.description}
                                    </div>
                                    <div>
                                        <ul className="btn">
                                            <button type="button" onClick={reviewOutHandler} className="primary block" disabled={bookMarks.length === 0}>Review</button>
                                            <button type="button"  className="primary cube" onClick={() => removeFromMarkHandler(item.book)}>Delete</button>
                                        </ul>
                                    </div>
                                  </div>
                            </div>
                        </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
