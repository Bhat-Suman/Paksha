const express = require('express');
const router = express.Router();
const Lodge = require('../models/Lodge');

// @route   POST /api/lodge/register
// @desc    Register for lodge booking
// @access  Public
router.post('/register', async (req, res) => {
  console.log('\n=== 🏠 New Lodge Booking Request ===');
  console.log('📥 Request body:', JSON.stringify(req.body, null, 2));
  
  try {
    const { 
      name, 
      phone, 
      email, 
      checkInDate, 
      checkOutDate, 
      numberOfGuests, 
      roomType, 
      specialRequests 
    } = req.body;
    
    // Validate required fields
    const missingFields = [];
    if (!name) missingFields.push('name');
    if (!phone) missingFields.push('phone');
    if (!checkInDate) missingFields.push('checkInDate');
    if (!checkOutDate) missingFields.push('checkOutDate');
    if (!numberOfGuests) missingFields.push('numberOfGuests');
    if (!roomType) missingFields.push('roomType');
    
    if (missingFields.length > 0) {
      const errorMsg = `Validation failed: Missing required fields: ${missingFields.join(', ')}`;
      console.error('❌', errorMsg);
      return res.status(400).json({ 
        success: false,
        message: errorMsg
      });
    }
    
    // Convert dates to Date objects
    const formattedCheckInDate = new Date(checkInDate);
    const formattedCheckOutDate = new Date(checkOutDate);
    
    if (isNaN(formattedCheckInDate.getTime()) || isNaN(formattedCheckOutDate.getTime())) {
      const errorMsg = 'Invalid date format';
      console.error('❌', errorMsg);
      return res.status(400).json({ 
        success: false,
        message: errorMsg
      });
    }
    
    // Create new lodge booking
    const lodgeData = {
      name: name.toString().trim(),
      phone: phone.toString().trim(),
      email: email ? email.toString().trim() : undefined,
      checkInDate: formattedCheckInDate,
      checkOutDate: formattedCheckOutDate,
      numberOfGuests: Number(numberOfGuests),
      roomType: roomType.toString().trim(),
      specialRequests: specialRequests ? specialRequests.toString().trim() : undefined
    };
    
    console.log('📝 Prepared lodge booking data:', JSON.stringify(lodgeData, null, 2));
    
    console.log('💾 Attempting to save lodge booking to database...');
    const newLodgeBooking = new Lodge(lodgeData);
    const savedLodgeBooking = await newLodgeBooking.save();
    
    console.log('✅ Lodge booking saved successfully. ID:', savedLodgeBooking._id);
    
    res.status(201).json({
      success: true,
      message: 'Lodge booking successful',
      data: savedLodgeBooking
    });
    
  } catch (err) {
    console.error('\n❌ ===== LODGE BOOKING ERROR =====');
    console.error('Error name:', err.name);
    console.error('Error message:', err.message);
    console.error('Error code:', err.code);
    console.error('Error stack:', err.stack);
    
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
  }
});

// @route   GET /api/lodge/bookings
// @desc    Get all lodge bookings
// @access  Public (in production, this should be protected)
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Lodge.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (err) {
    console.error('Error fetching lodge bookings:', err);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;
