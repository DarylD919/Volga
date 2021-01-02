import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import bookRouter from './routers/bookRouter.js';
import userRouter from './routers/userRouter.js';
import uploadRouter from './routers/uploadRouter.js';

//something secret
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//create connection
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/volga', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});


const port = process.env.PORT || 5000;




app.get('/', (req, res) => {
    res.send('Server is ready');
});
//books
app.use('/api/books', bookRouter);
//users
app.use('/api/users', userRouter);

//upload
app.use('/api/uploads', uploadRouter);

app.use((err, req, res ,next) => {
    res.status(500).send({ message: err.message});
});
//upload images
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});