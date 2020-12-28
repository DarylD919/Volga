import express from 'express';
import data from './data.js';

const app = express();

const port = process.env.PORT || 5000;

app.get('/api/books', (req, res) => {
    res.send(data.books);
})


app.get('/', (req, res) => {
    res.send('Server is ready');
});




app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});