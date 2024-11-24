const Book = require("../Model/book");

const validateID = require("../utils/validateID");

//CRUD

const getAllBook = async (req, res) => {
    const books = await Book.find({});
    res.status(200).json({ books });
  };

  const getBookByID = async (req, res) => {
    const { id } = req.params;
  
    if (!validateID(id)) {
      return res.status(400).json({ message: `ID ${id} is not valid` });
    }
  
    const book = await Book.findById(id);
  
    if (!book) {
      return res.status(404).json({ message: `No Book with ID: ${id}` });
    }
  
    res.status(200).json({message: `Book Found Successfully`, book})
  };
  
  

  
  const createBook = async (req, res) => {
    const { booktitle, author, genre } = req.body;
    if (!booktitle) {
      return res.status(400).json({ message: "Please Provide a Book Title" });
    }
    if (!author) {
      return res.status(400).json({ message: "Please Provide an Author" });
    }
    if (!genre) {
      return res.status(400).json({ message: "Please Provide a Genre" });
    }
  
    const book = await Book.create(req.body);
    res
      .status(201)
      .json({ message: "Book Created Successfully.", newBook: book });
  };
  
  const editBook = async (req, res) => {
    const { id } = req.params;
  
    if (!validateID(id)) {
      return res.status(400).json({ message: `ID ${id} is not valid` });
    }
  
    const book = await Book.findByIdAndUpdate(id, { new: true, overwrite: true});
  
    if (!book) {
      return res.status(404).json({ message: `No Book with ID: ${id}` });
    }
  
    res.status(200).json({message: `Book Updated Successfully`})
  };
  
  
  
  const deleteBook = async (req, res) => {
    const { id } = req.params;
  
    if (!validateID(id)) {
      return res.status(400).json({ message: `ID ${id} is not valid` });
    }
  
    const book = await Book.findOneAndDelete({ _id: id });
  
    if (!book) {
      return res.status(404).json({ message: `No Book with ID: ${id}` });
    }
  
    res.status(200).json({message: `Book Deleted Successfully`})
  };
  module.exports = { createBook, getAllBook, getBookByID, editBook, deleteBook};
  