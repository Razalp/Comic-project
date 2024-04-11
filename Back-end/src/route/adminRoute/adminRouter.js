// bookRoutes.js

import express from 'express';
import bookModel from '../../model/bookModel.js'; 
import upload from '../../middleWare/multerConfig.js'
const router = express.Router();

router.post('/books',upload.fields([{ name: 'pdf', maxCount: 1 }, { name: 'image', maxCount: 1 }]), async (req, res) => {
    try {
        console.log("heloooo")
      const { name, title } = req.body;
      const pdf = req.files['pdf'][0].path;
      const image = req.files['image'][0].path;
  
      const newBook = new bookModel({
        name,
        title,
        pdf,
        image,
      });
  
      await newBook.save();
      res.status(201).json({ message: 'Book added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  router.get('/get-books', async (req, res) => {
    try {
        const books = await bookModel.find();
        console.log(books)
        res.status(200).json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


export default router;
