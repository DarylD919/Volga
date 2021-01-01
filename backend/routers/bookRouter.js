import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Book from '../models/bookModel.js';
import { isAuth } from '../util.js';

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
        image: '/images/book1.jpg',
        category: 'sample category',
        stock: 1,
        rating: 0,
        numReviews: 0,
        description: 'sample',
        review: 'sample',
    });
    const createdBooks = await book.save();
    res.send({ message: 'Book created', book: createdBook });
})
);

export default bookRouter;