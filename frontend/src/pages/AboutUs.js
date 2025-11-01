import React from 'react';

const AboutUs = () => {
  // Sample gallery images
  const galleryImages = Array(8).fill(null).map((_, index) => ({
    id: index + 1,
    src: `https://via.placeholder.com/200?text=Temple+${index + 1}`,
    alt: `Temple Image ${index + 1}`
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Us
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              We are committed to performing sacred poojas and rituals that preserve traditional Vedic practices. 
              Our temple serves as a spiritual sanctuary where devotees can connect with the divine through authentic 
              ceremonies and age-old traditions.
            </p>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              'Performed 500+ homas and poojas with utmost devotion',
              'Over 20 years of dedicated service to the community',
              'Trusted by devotees across Karnataka',
              'Preserving Vedic traditions for future generations'
            ].map((achievement, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold mr-3">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <p className="text-sm text-gray-600 text-center">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Info */}
        <section className="mt-16 bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-center">
            To provide a sacred space for spiritual growth and cultural preservation through authentic Vedic rituals, 
            fostering a community united in devotion and tradition.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
