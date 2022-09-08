const express = require('express');
const router = express.Router();
const planApi	=	require('../api').plan;

router.post('/:id/:name', planApi.create.post);
router.get('/', planApi.getAll.get);
router.delete('/:id', planApi.remove.delete);
router.delete('/:id', planApi.remove.delete);


module.exports = router;
