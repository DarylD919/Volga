import React from 'react';
import Rating from '../components/Rating';
import data from '../data';

export default function BookPage(props) {
    const book = data.books.find((x) => x._id === props.match.params.id);
    if (!book) {
        return <div>Book not found</div>;
    }
    return (
        <div>
            <div className="row top">
                <div className="col-2">
                    <img className="medium" src={book.image} alt={book.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{book.name}</h1>
                        </li>
                        <li>
                            <h1>{book.category}</h1>
                        </li>
                        <Rating
                            rating={book.rating}
                            numReviews={book.numReviews}
                        ></Rating>
                        <li>
                            Description:
                            <p>{book.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <span className="review">Review</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
