import React from 'react';
import { Link } from 'react-router-dom';
import ContactBox from '../components/ContactBox';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-white">
      <div className="max-w-4xl w-full mx-auto py-12 px-4">
        {/* Welcome Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 drop-shadow-lg">
            Welcome to Pooja Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 drop-shadow">
            Choose a service to get started
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Pooja Registration Card */}
          <Link to="/pooja">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer group">
              <div className="text-center">
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🛕
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">
                  Pooja Registration
                </h2>
                <p className="text-gray-600 text-lg">
                  Register for various poojas and religious ceremonies
                </p>
                <div className="mt-6 inline-flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700">
                  Get Started
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Lodge Booking Card */}
          <Link to="/lodge">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer group">
              <div className="text-center">
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🏠
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                  Lodge Booking
                </h2>
                <p className="text-gray-600 text-lg">
                  Book comfortable accommodation for your stay
                </p>
                <div className="mt-6 inline-flex items-center text-purple-600 font-semibold group-hover:text-purple-700">
                  Get Started
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-white/80 text-sm">
            Need help? Contact our support team
          </p>
        </div>

        {/* Contact Box Section */}
        <div className="mt-12">
          <ContactBox />
        </div>
      </div>
    </div>
  );
}

export default Home;
