const express = require('express');
const router = express.Router();
const userApi	=	require('../api').user;

router.post('/', userApi.register.post);
router.get('/', userApi.getAll.get);
router.get('/:name', userApi.findUsers.get);
router.put('/:id', userApi.update.put);
router.delete('/:id', userApi.remove.delete);

module.exports = router;
