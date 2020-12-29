import express from 'express';
import data from './data.js';

const app = express();

const port = process.env.PORT || 5000;

app.get('/api/books/:id', (req, res) => {
    const book = data.books.find((x) => x._id === req.params.id);
    if (book) {
        res.send(book);
    } else {
        res.status(404).send({ message: 'Book does not exist'});
    }
});

app.get('/api/books', (req, res) => {
    res.send(data.books);
})


app.get('/', (req, res) => {
    res.send('Server is ready');
});




app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});