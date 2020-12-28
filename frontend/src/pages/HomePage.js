import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from '../components/Book';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function HomePage() {
  const [books, setBooks] = useState([]);

  const [loading, setLoading ] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () =>{
      try{
        setLoading(true);
        const { data } = await axios.get('/api/books');
        setLoading(false);
        setBooks(data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [])
    return (
        <div>
           <h1 className="subtitle">Welcome to Volga</h1>
           <h2>Review you favourite books</h2>
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
