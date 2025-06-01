const express = require('express');
const router = express.Router();
const controller = require('../controllers/authorControllers');

router.get('/authors', controller.getAuthors);
router.put('/authors/:id', controller.updateAuthor);

module.exports = router;
