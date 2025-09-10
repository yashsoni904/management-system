const express = require('express');
const router = express.Router();
const { applyToVacancy, getApplicantsForVacancy } = require('../controllers/applicationController');

router.post('/', applyToVacancy);
router.get('/:vacancyId', getApplicantsForVacancy);

module.exports = router;
