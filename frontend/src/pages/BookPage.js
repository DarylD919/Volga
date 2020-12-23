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
                    </div>
                </div>
                <div className="col-1">
                    <ul>
                        <div className="row">
                            <ul>
                                <li>
                                    <button className="primary block">Review</button>
                                </li>  
                                <li>
                                    <button className="primary cube">Save for later</button>
                                </li> 
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="col-2">
                <div className="card card-body">
                    <strong>Reviews:</strong>
                <p>{book.review}</p>

                </div>
            </div>
        </div>
    );
}
