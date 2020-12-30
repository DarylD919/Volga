import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        image: {type: String, required: true},
        category: {type: String, required: true},
        description: {type: String, required: true},
        review: {type: String, required: true},
        stock: {type: Number, required: true},
        rating: {type: Number, required: true},
        numReviews: {type: Number, required: true},
    },
    {
        timestamps: true,
    }
);

const Book = mongoose.model('Book', bookSchema);

export default Book;