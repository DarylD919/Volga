import React from 'react'
import { useSelector } from 'react-redux';

export default function ReviewPage() {
    const bookDetails = useSelector((state) => state.bookDetails);
    const { book } = bookDetails;

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    return (
        <div>
            <h1>Review</h1>
            <p>
                {userInfo.name} : {book.name}
            </p>
        </div>
    );
}
