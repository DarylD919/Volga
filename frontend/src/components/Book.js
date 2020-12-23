import React from 'react'
import Rating from './Rating';

export default function Book(props) {
    const { book } = props;

    return (
        <div key={book._id} className="card">
            <a href={`/book/${book._id}`}>
                <img className="small" src={book.image} alt={book.name} />
            </a>
            <div className="card-body">
                <a href={`/book/${book._id}`}>
                    <h2>{book.name}</h2>
                </a>
            <Rating rating={book.rating} numReviews={book.numReviews}></Rating>
            </div>
        </div>
    )
}
