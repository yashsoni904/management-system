const express = require('express');
const router = express.Router();
const { createVacancy, getVacancies } = require('../controllers/vacancyController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

// ✅ Only admins can create vacancies
router.post('/', protect, isAdmin, createVacancy);

// ✅ Anyone can view vacancies
router.get('/', getVacancies);

module.exports = router;

