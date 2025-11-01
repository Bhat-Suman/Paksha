import React from 'react';

const Ghoshala = () => {
  // Sample gallery images
  const galleryImages = Array(10).fill(null).map((_, index) => ({
    id: index + 1,
    src: `https://via.placeholder.com/250?text=Cow+${index + 1}`,
    alt: `Cow ${index + 1} at our Ghoshala`
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Our Ghoshala
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our Ghoshala is dedicated to the protection and care of sacred cows, providing them 
              with a peaceful environment, food, and shelter. We are committed to preserving the 
              ancient tradition of gau seva and promoting compassion for all living beings.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <p className="text-sm text-gray-600 text-center font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Info */}
        <section className="mt-16 bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-green-800 mb-4">Support Our Ghoshala</h2>
          <p className="text-gray-600 text-center">
            Your generous donations help us provide food, shelter, and medical care to our cows. 
            Join us in our mission to protect and care for these sacred animals.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Ghoshala;
