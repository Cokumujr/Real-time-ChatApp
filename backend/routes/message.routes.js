const express = require('express');
const { sendMessage, getMessages } = require('../controllers/message.controller');
const protectedRoutes = require('../middlewares/protectedRoutes');

const router = express.Router();

router.get('/:id',protectedRoutes, getMessages);
router.post('/send/:id', protectedRoutes, sendMessage);

module.exports = router;