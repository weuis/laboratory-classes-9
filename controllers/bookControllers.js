const Book = require('../models/Book');

exports.getBooks = async (req, res) => {
    const books = await Book.find().populate('author');
    res.json(books);
};

exports.createBook = async (req, res) => {
    const book = await Book.create(req.body);
    res.status(201).json(book);
};

exports.deleteBook = async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
};
