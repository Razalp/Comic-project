import bookModel from '../../model/bookModel.js'; 


const BookAdd=async (req, res) => {
    try {
        console.log("heloooo");
        const { name, title } = req.body;

  
        const pdfFileName = req.files['pdf'][0].filename; 
        const imageFileName = req.files['image'][0].filename; 
  
        const newBook = new bookModel({
            name,
            title,
            pdf: pdfFileName,
            image: imageFileName,
        });
  
        await newBook.save();
        res.status(201).json({ message: 'Book added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
  };


  const getBook= async (req, res) => {
    try {
        const books = await bookModel.find();
        console.log(books)
        res.status(200).json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


  


export {
    BookAdd,
    getBook,
    
}