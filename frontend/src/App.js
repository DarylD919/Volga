import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Navigation/Navbar';
import Book from './components/Book';
import data from './data';
import BookPage from './pages/BookPage';

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
        <Route path="/book/:id" component={BookPage}></Route>
      </main>
      <footer className="row center">Created By Daryl Darilag</footer>
    </div>
    </BrowserRouter>
  )
}
