const Club = require('../models/Club');

const createClub = async (req, res) => {
  try {
    const club = await Club.create(req.body);
    res.status(201).json(club);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getClubs = async (req, res) => {
  try {
    const clubs = await Club.find().sort({ createdAt: -1 });
    res.json(clubs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createClub, getClubs };
