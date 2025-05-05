import React, { useState } from 'react';
import { Car, Shield, Heart, Home } from 'lucide-react';

const InsuranceServices = () => {
  const [expandedServices, setExpandedServices] = useState<{ [key: number]: boolean }>({});

  const insuranceServices = [
    {
      icon: <Car className="w-10 h-10 text-dark-gold" />,
      title: "वाहन बीमा",
      description: "व्यापक और थर्ड पार्टी वाहन बीमा प्रतिस्पर्धी प्रीमियम और तेज क्लेम सेटलमेंट के साथ।",
      items: [
        "दोपहिया वाहन (बाइक/स्कूटर)", "निजी कार", "व्यावसायिक कार (टैक्सी/कैब)", 
        "ऑटो रिक्शा", "ई-रिक्शा", "बस (निजी/व्यावसायिक)", 
        "ट्रक (हल्का/भारी)", "ट्रैक्टर", "स्कूल वैन", 
        "एम्बुलेंस", "डिलीवरी वैन", "पिकअप वैन", 
        "टैंकर", "क्रेन", "ट्रेलर", 
        "डंपर", "फायर ब्रिगेड वाहन", "पुलिस वाहन", 
        "कचरा संग्रह वैन", "निर्माण वाहन (जैसे, जेसीबी, लोडर)"
      ]
    },
    {
      icon: <Shield className="w-10 h-10 text-dark-gold" />,
      title: "स्वास्थ्य बीमा",
      description: "व्यक्तिगत और परिवार स्वास्थ्य कवरेज कैशलेस अस्पताल में भर्ती और व्यापक नेटवर्क सहायता के साथ।",
      items: [
        "व्यक्तिगत स्वास्थ्य बीमा", "परिवार फ्लोटर स्वास्थ्य बीमा", "वरिष्ठ नागरिक स्वास्थ्य बीमा", 
        "गंभीर बीमारी बीमा", "मातृत्व स्वास्थ्य बीमा", "समूह स्वास्थ्य बीमा (कॉर्पोरेट)", 
        "व्यक्तिगत दुर्घटना बीमा", "टॉप-अप स्वास्थ्य बीमा", "सुपर टॉप-अप स्वास्थ्य बीमा", 
        "बीमारी-विशिष्ट बीमा (जैसे, कैंसर, मधुमेह)", "आयुष्मान उपचार कवरेज", 
        "पूर्व-मौजूदा बीमारी कवरेज योजनाएं", "दैनिक अस्पताल नकद योजनाएं", "ओपीडी (आउट पेशेंट विभाग) कवर योजनाएं", 
        "अस्पताल में भर्ती बीमा", "निवारक स्वास्थ्य जांच योजनाएं", "बाल स्वास्थ्य बीमा", 
        "महिला स्वास्थ्य बीमा योजनाएं"
      ]
    },
  ];

  const toggleService = (index: number) => {
    setExpandedServices(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div id="insurance-services" className="py-16 bg-dark-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">बीमा सेवाएं</h2>
          <p className="text-dark-muted max-w-3xl mx-auto">
            हम आपके लिए महत्वपूर्ण चीजों की सुरक्षा के लिए विशेषज्ञ मार्गदर्शन और सहायता के साथ बीमा उत्पादों की एक विस्तृत श्रृंखला प्रदान करते हैं।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insuranceServices.map((service, index) => (
            <div
              key={index}
              className="service-card bg-dark-card border border-dark-border rounded-lg p-6 hover:border-dark-gold transition-colors duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-dark-muted mb-4">{service.description}</p>
              
              <div className="mt-4 pl-4 border-l-2 border-dark-gold">
                <ul className="text-sm space-y-2 text-dark-muted">
                  {service.items
                    .slice(0, expandedServices[index] ? undefined : 5)
                    .map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="mr-2">•</span> {item}
                      </li>
                    ))}
                </ul>
                {service.items.length > 5 && (
                  <button
                    onClick={() => toggleService(index)}
                    className="mt-4 text-dark-gold hover:text-dark-gold/80 transition-colors"
                  >
                    {expandedServices[index] ? 'कम दिखाएं' : 'सभी सेवाएं देखें'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsuranceServices;
