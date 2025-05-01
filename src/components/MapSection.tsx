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
                alt="JAN SEVA KENDRA PIRO SARAIYA Location"
                className="w-full h-full object-contain bg-[#e5f3eb] rounded-lg"
              />
            </a>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col items-center md:items-start justify-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Find Us on Google Maps</h2>
            <p className="text-dark-muted text-lg">
              Visit us at JAN SEVA KENDRA PIRO SARAIYA for all your insurance and government service needs.
            </p>
            <a
              href="https://maps.app.goo.gl/CHfjJG8bkKBY8STG6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-dark-gold text-white rounded-lg hover:bg-dark-gold/90 transition-colors"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Check on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection; 