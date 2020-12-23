import React from 'react'
import Book from '../components/Book';
import data from '../data';
export default function HomePage() {
    return (
        <>
        <h1 className="subtitle">Welcome</h1>
        <div className="row center">
          {data.books.map((book) => (
            <Book key={book._id} book={book}></Book>
          ))}
        </div>
        </>
    )
}
