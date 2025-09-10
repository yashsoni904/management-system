const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  vacancy: { type: mongoose.Schema.Types.ObjectId, ref: 'Vacancy', required: true },
  appliedAt: { type: Date, default: Date.now }
});

// Prevent duplicate applications for the same vacancy by the same user
applicationSchema.index({ user: 1, vacancy: 1 }, { unique: true });

module.exports = mongoose.model('Application', applicationSchema);
