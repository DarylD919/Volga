import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Book(props) {
    const { book } = props;

    return (
        <div key={book._id} className="card">
            <Link to={`/book/${book._id}`}>
                <img className="small" src={book.image} alt={book.name} />
            </Link>
            <div className="card-body">
                <Link to={`/book/${book._id}`}>
                    <h2>{book.name}</h2>
                </Link>
            <Rating rating={book.rating} numReviews={book.numReviews}></Rating>
            </div>
        </div>
    )
}
