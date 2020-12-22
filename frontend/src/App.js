import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Navigation/Navbar';
import Book from './components/Book';
import data from './data';

export default function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header>
        <Nav />
      </header>
      <main>
      <h1>Welcome</h1>
        <div className="row center">
          {data.books.map((book) => (
            <Book key={book._id} book={book}></Book>
          ))}
        </div>
      </main>
    </div>
    </BrowserRouter>
  )
}
