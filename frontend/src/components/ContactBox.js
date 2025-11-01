import React from 'react';

const ContactBox = () => {
  const pujaris = [
    { name: 'Narayan Bhat Pujari', phone: '+91 98765 43210' },
    { name: 'Sryaprakash Bhat Pujari', phone: '+91 98765 12340' },
    { name: 'Sachin Bhat Pujari', phone: '+91 98765 56780' }
  ];

  return (
    <div className="bg-blue-50 rounded-xl shadow-md p-6 mt-12 max-w-4xl mx-auto border-2 border-red-500">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Contact Our Pujaris
      </h2>
      
      <div className="grid gap-4 md:grid-cols-3">
        {pujaris.map((pujari, index) => (
          <div 
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-blue-100"
          >
            <h3 className="font-semibold text-gray-800">{pujari.name}</h3>
            <a 
              href={`tel:${pujari.phone.replace(/\D/g, '')}`}
              className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
              {pujari.phone}
            </a>
          </div>
        ))}
      </div>
      
      <p className="text-sm text-gray-600 mt-6 text-center">
        Available from 6:00 AM to 10:00 PM, 7 days a week
      </p>
    </div>
  );
};

export default ContactBox;
