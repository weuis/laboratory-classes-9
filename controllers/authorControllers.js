const Author = require('../models/Author');

exports.getAuthors = async (req, res) => {
    const authors = await Author.find();
    res.json(authors);
};

exports.updateAuthor = async (req, res) => {
    const { id } = req.params;
    const author = await Author.findByIdAndUpdate(id, req.body, { new: true });
    res.json(author);
};
