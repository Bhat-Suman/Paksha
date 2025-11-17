import React, { useState } from 'react';
import axios from 'axios';

function PoojaForm() {
  const [formData, setFormData] = useState({
    poojaType: '',
    name: '',
    gotra: '',
    date: '',
    place: '',
    phone: '',
    remarks: ''
  });

  const handleInputChange = (e) => {
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
      const response = await axios.post('http://localhost:5000/api/register', formDataToSend, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      console.log('Response from server:', response.data);
      
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
        console.error('Unexpected response format:', response.data);
        throw new Error(response.data?.message || 'Registration failed - unexpected response');
      }
    } catch (error) {
      console.error('Registration error:', error);
      let errorMessage = 'Registration failed. Please try again.';
      
      if (error.response) {
        // Server responded with error status code
        errorMessage = error.response.data?.message || `Server error: ${error.response.status}`;
      } else if (error.request) {
        // No response received
        errorMessage = 'No response from server. Please check if the backend is running.';
      } else {
        // Something else happened
        errorMessage = `Error: ${error.message}`;
      }
      
      alert(`❌ ${errorMessage}`);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Pooja Registration Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Pooja Type *</label>
          <input
            type="text"
            name="poojaType"
            value={formData.poojaType}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Gotra *</label>
          <input
            type="text"
            name="gotra"
            value={formData.gotra}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date *</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Place *</label>
          <input
            type="text"
            name="place"
            value={formData.place}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Remarks</label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleInputChange}
            rows="3"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Registration
          </button>
        </div>
      </form>
    </div>
  );
}

export default PoojaForm;