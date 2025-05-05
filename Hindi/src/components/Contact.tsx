import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">संपर्क करें</h2>
          <p className="text-dark-muted max-w-3xl mx-auto">
            हमारी सेवाओं के बारे में किसी भी जानकारी के लिए हमसे संपर्क करें। हम आपकी मदद के लिए यहाँ हैं!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6">संपर्क जानकारी</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-dark-gold mt-1 mr-3" />
                <div>
                  <p className="font-medium">पता</p>
                  <p className="text-dark-muted">
                    जन सेवा केंद्र, पीरो सरैया और देहली, उत्तर प्रदेश 274304
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-dark-gold mt-1 mr-3" />
                <div>
                  <p className="font-medium">फोन</p>
                  <a href="tel:9721883299" className="text-dark-muted hover:text-dark-gold">
                    +91 97218 83299
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-dark-gold mt-1 mr-3" />
                <div>
                  <p className="font-medium">ईमेल</p>
                  <a href="mailto:contact@sanjaysinghcsc.com" className="text-dark-muted hover:text-dark-gold">
                    contact@sanjaysinghcsc.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6">कार्यालय समय</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-dark-muted">सोमवार - शुक्रवार</span>
                <span>सुबह 9:00 - शाम 6:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-muted">शनिवार</span>
                <span>सुबह 10:00 - शाम 4:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-muted">रविवार</span>
                <span>सुबह 10:00 - दोपहर 2:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
