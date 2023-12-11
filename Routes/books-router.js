const express = require("express")
const book = require("../Models/books-model")
const router = express.Router()
const cors = require('cors');
const booksModel = require("../Models/books-model");

let corsOptions = {
  origin: [ 'http://localhost:4000', ]
};


// create books

router.post('/create', (req, res) => {
  const newBook = new book(req.body);
  newBook.save();
  res.status(201).json(newBook);
});

// get all books

router.get('/getallbooks',cors(corsOptions), async (req, res) => {
  try {
    const allBooks = await book.find(); 
    res.status(201).json(allBooks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


// //get book with id

router.get( '/getById/:id', async(req,res) =>{
  const Book = await book.findById(req.params.id)
  res.status(201).json(Book)
})



// book delete with id

router.delete( '/deleteById/:id', async (req,res) =>{
  const Book = await book.findByIdAndDelete(req.params.id)
  res.status(201).json(Book)
})


// book update with id

router.put( '/updateById/:id', async (req,res) =>{
  const Book = await book.findByIdAndUpdate( req.params.id,{ $set:req.body},{ new:true });
  res.status(201).json(Book)
})

//search with book name

// router.get('/searchByname/:bookname', async (req, res) => {
//   try {
//     const bookNameToSearch = req.params.bookname;
//     const allBooks = await booksModel.find(); 

//     if (!allBooks || allBooks.length === 0) {
//       res.status(404).json({ error: 'No books found' });
//       return;
//     }
//     const Booksearch = allBooks.filter(book => 
//       book.bookname.toLowerCase().includes(bookNameToSearch.toLowerCase())
//     );

//     if (Booksearch.length === 0) {
//       res.status(404).json({ error: 'No matching books found' });
//       return;
//     }
//     res.status(200).json(Booksearch);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

router.get('/searchByname/:bookname', async (req, res) => {
  try {
    const bookNameToSearch = req.params.bookname;
    const allBooks = await booksModel.find(); 
    
    const Booksearch = allBooks.filter(book =>book.bookname.toLowerCase().includes(bookNameToSearch.toLowerCase())
    )
    res.status(200).json(Booksearch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
