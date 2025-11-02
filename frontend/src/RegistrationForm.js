import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    poojaType: '',
    name: '',
    gotra: '',
    date: '',
    place: '',
    phone: '',
    remarks: ''
  });

  const poojaTypes = [
    'Shradha',
    'Paksha',
    'Pinda Pooja',
    'Satyanarayan Pooja',
    'Rudrabhishek',
    'Lakshmi Pooja',
    'Navagraha Pooja'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic client-side validation
    if (!formData.poojaType || !formData.name || !formData.gotra || !formData.date || !formData.place || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    // Format date to ISO string for consistent parsing on the server
    const formDataToSend = {
      ...formData,
      date: new Date(formData.date).toISOString()
    };

    try {
      console.log('Sending registration data:', formDataToSend);
      const response = await axios.post('http://localhost:5000/api/register', formDataToSend);
      
      if (response.data && response.data.success) {
        alert('✅ Registration successful!');
        // Reset form
        setFormData({
          poojaType: '',
          name: '',
          gotra: '',
          date: '',
          place: '',
          phone: '',
          remarks: ''
        });
      } else {
        throw new Error(response.data?.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      const errorMessage = error.response?.data?.message || 
                         error.message || 
                         'Registration failed. Please check your connection and try again.';
      alert(`❌ ${errorMessage}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Pooja Registration</h1>
          <p className="mt-2 text-sm text-gray-600">Fill in the details to register for the pooja</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="poojaType" className="block text-sm font-medium text-gray-700">Pooja Type</label>
            <select
              id="poojaType"
              name="poojaType"
              value={formData.poojaType}
              onChange={handleChange}
              required
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">Select a pooja type</option>
              {poojaTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="gotra" className="block text-sm font-medium text-gray-700">Gotra</label>
            <input
              type="text"
              id="gotra"
              name="gotra"
              value={formData.gotra}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="place" className="block text-sm font-medium text-gray-700">Place</label>
            <input
              type="text"
              id="place"
              name="place"
              value={formData.place}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="remarks" className="block text-sm font-medium text-gray-700">Remarks (Optional)</label>
            <textarea
              id="remarks"
              name="remarks"
              rows="3"
              value={formData.remarks}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
