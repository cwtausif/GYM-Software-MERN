// backend/models/MembershipDuration.js
const mongoose = require('mongoose');

const membershipDurationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: false,
  },
});

// Add a compound index to enforce uniqueness on name and duration
membershipDurationSchema.index({ name: 1, duration: 1 }, { unique: true });

const MembershipDuration = mongoose.model('MembershipDuration', membershipDurationSchema);

module.exports = MembershipDuration;
