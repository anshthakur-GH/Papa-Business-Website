import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-dark-muted max-w-3xl mx-auto">
            Get in touch with us for any queries about our services. We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-dark-gold mt-1 mr-3" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-dark-muted">
                    Jan Seva Kendra, Piro Saraiya & Dehli, Uttar Pradesh 274304
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-dark-gold mt-1 mr-3" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:9721883299" className="text-dark-muted hover:text-dark-gold">
                    +91 97218 83299
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-dark-gold mt-1 mr-3" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:contact@sanjaysinghcsc.com" className="text-dark-muted hover:text-dark-gold">
                    contact@sanjaysinghcsc.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6">Business Hours</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-dark-muted">Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-muted">Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-muted">Sunday</span>
                <span>10:00 AM - 2:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
