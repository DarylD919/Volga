import express from 'express';
import  mongoose  from 'mongoose';
import bookRouter from './routers/bookRouter.js';
import userRouter from './routers/userRouter.js';



const app = express();

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

app.use((err, req, res ,next) => {
    res.status(500).send({ message: err.message});
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});