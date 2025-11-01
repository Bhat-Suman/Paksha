const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// @route   POST /api/register
// @desc    Register for a pooja
// @access  Public
router.post('/register', async (req, res) => {
  try {
    console.log('Received registration request:', req.body);
    const { poojaType, name, gotra, date, place, phone, remarks } = req.body;
    
    // Create new registration
    const newRegistration = new Registration({
      poojaType,
      name,
      gotra,
      date,
      place,
      phone,
      remarks
    });

    // Save to database
    const registration = await newRegistration.save();
    console.log('Registration saved successfully:', registration._id);
    
    res.status(201).json(registration);
  } catch (err) {
    console.error('Error saving registration:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// @route   GET /api/registrations
// @desc    Get all registrations
// @access  Public
router.get('/registrations', async (req, res) => {
  try {
    const registrations = await Registration.find().sort({ date: -1 });
    res.json(registrations);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
