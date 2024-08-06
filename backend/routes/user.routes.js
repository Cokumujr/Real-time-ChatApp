const express = require('express');
const protectedRoutes = require('../middlewares/protectedRoutes');
const { getUsersForSidebar } = require('../controllers/user.controller');

const router =express.Router();

router.get('/',protectedRoutes, getUsersForSidebar);

module.exports = router