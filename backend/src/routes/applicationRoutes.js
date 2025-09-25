const express = require('express');
const router = express.Router();
const { applyToVacancy, getApplicantsForVacancy } = require('../controllers/applicationController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

// Only authenticated users can apply
router.post('/apply', protect, applyToVacancy);

// Only admins see applicants
router.get('/:vacancyId/applicants', protect, isAdmin, getApplicantsForVacancy);

module.exports = router;
