const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// Verify the Registration model is loaded
if (!Registration) {
  console.error('❌ Registration model not loaded!');
} else {
  console.log('✅ Registration model loaded successfully');
}

// @route   POST /api/register
// @desc    Register for a pooja
// @access  Public
router.post('/register', async (req, res) => {
  console.log('\n=== 🌟 New Registration Request ===');
  console.log('📥 Request body:', JSON.stringify(req.body, null, 2));
  
  try {
    const { poojaType, name, gotra, date, place, phone, remarks } = req.body;
    
    // Validate required fields
    const missingFields = [];
    if (!poojaType) missingFields.push('poojaType');
    if (!name) missingFields.push('name');
    if (!gotra) missingFields.push('gotra');
    if (!date) missingFields.push('date');
    if (!place) missingFields.push('place');
    if (!phone) missingFields.push('phone');
    
    if (missingFields.length > 0) {
      const errorMsg = `Validation failed: Missing required fields: ${missingFields.join(', ')}`;
      console.error('❌', errorMsg);
      return res.status(400).json({ 
        success: false,
        message: errorMsg
      });
    }
    
    // Convert date string to Date object
    const formattedDate = new Date(date);
    if (isNaN(formattedDate.getTime())) {
      const errorMsg = `Invalid date format: ${date}`;
      console.error('❌', errorMsg);
      return res.status(400).json({ 
        success: false,
        message: errorMsg
      });
    }
    
    // Create new registration
    const registrationData = {
      poojaType: poojaType.toString().trim(),
      name: name.toString().trim(),
      gotra: gotra.toString().trim(),
      date: formattedDate,
      place: place.toString().trim(),
      phone: phone.toString().trim(),
      remarks: remarks ? remarks.toString().trim() : ''
    };
    
    console.log('📝 Prepared registration data:', JSON.stringify(registrationData, null, 2));
    
    console.log('💾 Attempting to save to database...');
    const newRegistration = new Registration(registrationData);
    const savedRegistration = await newRegistration.save();
    
    console.log('✅ Registration saved successfully. ID:', savedRegistration._id);
    
    res.status(201).json({
      success: true,
      message: 'Registration successful',
      data: savedRegistration
    });
    
  } catch (err) {
    console.error('\n❌ ===== REGISTRATION ERROR =====');
    console.error('Error name:', err.name);
    console.error('Error message:', err.message);
    
    // Handle validation errors
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors
      });
    }
    
    // Handle duplicate key errors
    if (err.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Duplicate entry. This registration already exists.'
      });
    }
    
    // Handle other errors
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
  }
});

// @route   GET /api/registrations
// @desc    Get all registrations
// @access  Public
router.get('/registrations', async (req, res) => {
  try {
    const registrations = await Registration.find().sort({ date: -1 });
    res.status(200).json({
      success: true,
      count: registrations.length,
      data: registrations
    });
  } catch (err) {
    console.error('Error fetching registrations:', err);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
  }
});

module.exports = router;
