import React from 'react';
import { MapPin } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="py-16 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Map Image */}
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <a 
              href="https://maps.app.goo.gl/CHfjJG8bkKBY8STG6"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full hover:opacity-90 transition-opacity"
            >
              <img
                src="/lovable-uploads/map-screenshot.jpg.jpg"
                alt="जन सेवा केंद्र पीरो सरैया का स्थान"
                className="w-full h-full object-contain bg-[#e5f3eb] rounded-lg"
              />
            </a>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col items-center md:items-start justify-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">गूगल मैप्स पर हमें खोजें</h2>
            <p className="text-dark-muted text-lg">
              सभी बीमा और सरकारी सेवाओं के लिए जन सेवा केंद्र पीरो सरैया पर पधारें।
            </p>
            <a
              href="https://maps.app.goo.gl/CHfjJG8bkKBY8STG6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-dark-gold text-white rounded-lg hover:bg-dark-gold/90 transition-colors"
            >
              <MapPin className="w-5 h-5 mr-2" />
              गूगल मैप्स पर देखें
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection; 