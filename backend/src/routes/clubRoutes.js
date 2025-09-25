const express = require('express');
const router = express.Router();
const { createClub, getClubs } = require('../controllers/clubController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

router.post('/', protect, isAdmin, createClub); // ✅ Only admins
router.get('/', getClubs); // Public

module.exports = router;

