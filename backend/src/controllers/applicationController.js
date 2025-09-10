const Application = require('../models/Application');

const applyToVacancy = async (req, res) => {
  try {
    const { userId, vacancyId } = req.body;

    // ✅ Map incoming keys to model field names
    const application = await Application.create({
      user: userId,
      vacancy: vacancyId
    });

    res.status(201).json(application);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: 'You have already applied for this vacancy.' });
    }
    res.status(400).json({ error: err.message });
  }
};

const getApplicantsForVacancy = async (req, res) => {
  try {
    const { vacancyId } = req.params;
    const applicants = await Application.find({ vacancy: vacancyId })
      .populate('user', 'name email')
      .sort({ appliedAt: -1 });
    res.json(applicants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { applyToVacancy, getApplicantsForVacancy };
