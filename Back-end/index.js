// app.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import adminRouter from './src/route/adminRoute/adminRouter.js'; 
import path from 'path';
import mongoose from 'mongoose';
const app = express();
dotenv.config();

// Enable CORS for specific origin
const corsOptions = {
  origin: 'http://localhost:5173',
};
mongoose.connect("mongodb://127.0.0.1:27017/comic")
.then(() => console.log('Mongo connected'))
.catch(() => console.log('Not connected'));

app.use(cors(corsOptions));


app.use('/admin', adminRouter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
