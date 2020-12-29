import React from 'react';
import * as IconsFa from 'react-icons/fa';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Nav from './components/Navigation/Navbar';
import BookPage from './pages/BookPage';
import HomePage from './pages/HomePage';
import ReviewPage from './pages/ReviewPage';
import BookMarkPage from './pages/BookMarkPage';
import { useSelector } from 'react-redux';

export default function App() {
  const mark = useSelector((state) => state.mark);
  const { bookMarks } = mark;
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header>
        <Nav />
        <Link className="navbar-book" to="/bookmark">
            <IconsFa.FaBookmark />
            {bookMarks.length > 0 && (
                <span className="badge">{bookMarks.length}</span>
            )}
        </Link>
      </header>
      <main>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/book/:id" component={BookPage}></Route>
        <Route path="/review/:id" component={ReviewPage}></Route>
        <Route path="/bookmark/:id" component={BookMarkPage}></Route>
      </main>
      <footer className="row center">Created By Daryl Darilag</footer>
    </div>
    </BrowserRouter>
  )
}
