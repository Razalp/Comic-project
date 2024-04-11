// bookModel.js

import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookSchema = new Schema({
    name: {
        type: String, 
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    pdf: {
        type: String, 
        required: true,
    },
    image: {
        type: String, 
        required: true,
    },
});

const bookModel = mongoose.model('Book', bookSchema); 

export default bookModel;
