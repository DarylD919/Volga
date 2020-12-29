import React from 'react'
import { useSelector } from 'react-redux';

export default function ReviewPage(props) {
    const bookDetails = useSelector((state) => state.bookDetails);
    const { book } = bookDetails;

    return (
        <div>
            <h1>Review</h1>
            <p>
                Review : {book.name}
            </p>
        </div>
    );
}
