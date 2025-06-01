const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookControllers');

router.get('/books', controller.getBooks);
router.post('/books', controller.createBook);
router.delete('/books/:id', controller.deleteBook);

module.exports = router;
