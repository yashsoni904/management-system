const express = require('express');
const router = express.Router();
const { createUser, getUsers } = require('../controllers/userController');

// POST /api/users → create a new user
router.post('/', createUser);

// GET /api/users → fetch all users
router.get('/', getUsers);

module.exports = router;
