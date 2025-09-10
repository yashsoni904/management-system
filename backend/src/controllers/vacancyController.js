const Vacancy = require('../models/Vacancy');

const createVacancy = async (req, res) => {
  try {
    const vacancy = await Vacancy.create(req.body);
    res.status(201).json(vacancy);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getVacancies = async (req, res) => {
  try {
    const vacancies = await Vacancy.find()
      .populate('club', 'name')
      .sort({ createdAt: -1 });
    res.json(vacancies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createVacancy, getVacancies };
