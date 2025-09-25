const express = require('express');
const router = express.Router();
const { createEvent, getEvents } = require('../controllers/eventController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

// ✅ Only admins can create events
router.post('/', protect, isAdmin, createEvent);

// ✅ Anyone can view events
router.get('/', getEvents);

module.exports = router;
