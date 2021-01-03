import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Book from '../models/bookModel.js';
import { isAdmin, isAuth } from '../util.js';

const bookRouter = express.Router();

bookRouter.get('/', expressAsyncHandler(async (req, res) => {
    const books = await Book.find({});
    res.send(books);
})
);

bookRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    const createdBooks = await Book.insertMany(data.books);
    res.send({ createdBooks });
})
);

bookRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (book) {
        res.send(book);
    } else {
        res.status(404).send({ message: 'Book not found'});
    }
})
);

bookRouter.post('/', isAuth, expressAsyncHandler(async (req, res) => {
    const book = new Book({
        name: 'sample name' + Date.now(),
        category: 'sample category',
        image: '/images/book1.jpg',
        rating: 0,
        stock: 2,
        numReviews: 0,
        description: 'sample',
        review: 'sample',
    });
    const createdBook = await book.save();
    res.send({ message: 'Book created', book: createdBook });
})
);

bookRouter.put('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res) =>{
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    if (book) {
        book.name = req.body.name;
        book.category = req.body.category;
        book.image = req.body.image;
        book.description = req.body.description;
        book.review = req.body.review;
        const updatedBook = await book.save();
        res.send({ message: 'Book updated', book: updatedBook });
    } else {
        res.status(404).send({ message: 'Book not found' });
    }
})
);

bookRouter.delete('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (book) {
        const deleteBook = await book.remove();
        res.send({ message: 'Book Deleted', book: deleteBook });
    } else {
         res.status(404).send({ message:'Book not found'});
    }
})
);

export default bookRouter;