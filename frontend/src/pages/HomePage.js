import React, { useEffect } from 'react';
import Book from '../components/Book';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {listBooks} from '../actions/bookActions';
import { useDispatch, useSelector } from 'react-redux';


export default function HomePage() {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookList);
  const { loading, error, books } = bookList;

  useEffect(() => {
    dispatch(listBooks());
  }, [dispatch])
    return (
        <div>
           <h1 className="subtitle">Welcome</h1>
        {loading ? (
        <LoadingBox></LoadingBox>
        ) :  error ? (
        <MessageBox variant="danger">{error}</MessageBox>
         ) : (
           <div className="row center">
          {books.map((book) => (
            <Book key={book._id} book={book}></Book>
          ))}
        </div>
         )}
        </div>
    );
}
