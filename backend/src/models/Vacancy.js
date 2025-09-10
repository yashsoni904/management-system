const mongoose = require('mongoose');

const vacancySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  slots: { type: Number, required: true },
  club: { type: mongoose.Schema.Types.ObjectId, ref: 'Club', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vacancy', vacancySchema);
