const express = require('express');
const router = express.Router();
const controller = require('../controllers/personController');

router.get('/all', controller.getAll);
router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.del);

module.exports = router;
