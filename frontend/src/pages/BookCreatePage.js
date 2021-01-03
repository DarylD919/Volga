import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { detailsBook, updateBook } from '../actions/bookActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { BOOK_UPDATE_RESET } from '../constants/bookConstants';


export default function BookCreatePage(props) {
    
const bookId = props.match.params.id;
const [name, setName] = useState('');
const [category, setCategory] = useState('');
const [image, setImage] = useState('');
const [description, setDescription] = useState('');
const [review, setReview] = useState('');

const bookDetails = useSelector((state) => state.bookDetails);
const { loading, error, book } = bookDetails;

const bookUpdate = useSelector((state) => state.bookUpdate);
const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
} = bookUpdate;

const dispatch = useDispatch();
useEffect(() => {
    if (successUpdate){
        props.history.push('/booklist');
    }
    if (!book || book._id !== bookId || successUpdate) {
        dispatch({ type: BOOK_UPDATE_RESET });
        dispatch(detailsBook(bookId));
    } else {
        setName(book.name);
        setCategory(book.category);
        setImage(book.image);
        setDescription(book.description);
        setReview(book.review);
    }
}, [book, dispatch, bookId, successUpdate, props.history]);

const submitHandler = (e) => {
    e.preventDefault();
    //update Book
    dispatch(updateBook({
        _id: bookId,
        name,
        category,
        image,
        description,   
        review     
    })
    );
};

const [loadingUpload, setLoadingUpload] = useState(false);
const [errorUpload, setErrorUpload] = useState('');

const userSignin = useSelector((state) => state.userSignin);
const { userInfo } = userSignin;
const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try{
        const { data } = await Axios.post('/api/uploads', bodyFormData, {
            headers: 
            {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        setImage(data);
        setLoadingUpload(false);
    } catch (error) {
        setErrorUpload(error.message);
        setLoadingUpload(false);
    }
};
    return (
        <div>
        <form className="form" onSubmit={submitHandler}>
            <div>
                <h1>Add</h1>
            </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
            <LoadingBox></LoadingBox>
        ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
        ) : (
            <>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
            </div>
            <div>
                <label htmlFor="category">Category:</label>
                <input
                    id="category"
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                ></input>
            </div>
            <div>
            <div>
                <label htmlFor="image">Image:</label>
                <input
                    id="image"
                    type="text"
                    placeholder="Image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                ></input>
            </div>
            <div>
                <label htmlFor="imageFile">Image File</label>
                <input
                    id="imageFile"
                    type="file"
                    label="Choose Image"
                    onChange={uploadFileHandler}
                ></input>
                {loadingUpload && <LoadingBox></LoadingBox>}
                {errorUpload && (
                        <MessageBox variant="danger">{errorUpload}</MessageBox>
                )}
            </div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    rows="5"
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <div>
                <label htmlFor="review">Review:</label>
                <textarea
                    id="review"
                    rows="5"
                    type="text"
                    placeholder="Review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                ></textarea>
            </div>
            <label />
            <button className="primary block" type="submit">
                Create
            </button>
            </>
        )}
        </form>
    </div>
    )
}
