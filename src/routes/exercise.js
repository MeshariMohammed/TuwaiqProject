const express = require('express');
const router = express.Router();
const exericseApi	=	require('../api').exercise;

router.post('/', exericseApi.create.post);
router.get('/', exericseApi.getAll.get);
router.get('/:name', exericseApi.findExercises.get);

module.exports = router;
