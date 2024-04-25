// bookRoutes.js

import express from 'express';
import bookModel from '../../model/bookModel.js'; 
import upload from '../../middleWare/multerConfig.js'
import { BookAdd,getBook } from '../../controller/adminController/BookController.js';
const router = express.Router();

router.post('/books', upload.fields([{ name: 'pdf', maxCount: 1 }, { name: 'image', maxCount: 1 }]),BookAdd )
router.get('/get-books',getBook)


export default router;
