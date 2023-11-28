// backend/routes/membershipDurationRoutes.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const MembershipDuration = require('../models/MembershipDuration');

// Middleware to check accessToken
const authenticateToken = (req, res, next) => {
  const token = req.header('accessToken');
  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    // Verify token (you may need to adjust this based on your token structure)
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Invalid token' });
  }
};

// GET all membership durations
router.get('/', authenticateToken, async (req, res) => {
  try {
    const durations = await MembershipDuration.find();
    res.json(durations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET a specific membership duration by ID
router.get('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const duration = await MembershipDuration.findById(id);
    if (!duration) {
      return res.status(404).json({ error: 'Membership duration not found' });
    }
    res.json(duration);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST a new membership duration
router.post('/', authenticateToken, async (req, res) => {
  const { name, duration } = req.body;

  try {
    const existingDuration = await MembershipDuration.findOne({ name, duration });
    if (existingDuration) {
      return res.status(400).json({ error: 'Membership duration with the same name and duration already exists' });
    }

    const newDuration = new MembershipDuration({ name, duration });
    const savedDuration = await newDuration.save();
    res.json(savedDuration);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT/Update a membership duration by ID
router.put('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { name, duration } = req.body;

  try {
    const updatedDuration = await MembershipDuration.findByIdAndUpdate(
      id,
      { name, duration },
      { new: true }
    );
    if (!updatedDuration) {
      return res.status(404).json({ error: 'Membership duration not found' });
    }
    res.json(updatedDuration);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE a membership duration by ID
router.delete('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    const deletedDuration = await MembershipDuration.findByIdAndDelete(id);
    if (!deletedDuration) {
      return res.status(404).json({ error: 'Membership duration not found' });
    }
    res.json(deletedDuration);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
