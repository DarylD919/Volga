import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Navigation/Navbar';
import BookPage from './pages/BookPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header>
        <Nav />
      </header>
      <main>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/book/:id" component={BookPage}></Route>
      </main>
      <footer className="row center">Created By Daryl Darilag</footer>
    </div>
    </BrowserRouter>
  )
}
