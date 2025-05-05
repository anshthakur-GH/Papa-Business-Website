import React, { useState } from 'react';
import { FileText, Users, List } from 'lucide-react';

const CSCServices = () => {
  const [expandedServices, setExpandedServices] = useState<{ [key: number]: boolean }>({});

  const cscServices = [
    {
      icon: <FileText className="w-10 h-10 text-dark-gold" />,
      title: "सरकारी प्रमाणपत्र",
      description: "जन्म/मृत्यु प्रमाणपत्र, आय, जाति, डोमिसाइल और अन्य आवश्यक दस्तावेज।",
      items: [
        "जन्म प्रमाणपत्र", "मृत्यु प्रमाणपत्र", "विवाह प्रमाणपत्र", "तलाक प्रमाणपत्र", 
        "डोमिसाइल प्रमाणपत्र", "राष्ट्रीयता प्रमाणपत्र", "जाति प्रमाणपत्र", "जनजाति प्रमाणपत्र", 
        "आय प्रमाणपत्र", "रोजगार प्रमाणपत्र", "बेरोजगारी प्रमाणपत्र", 
        "आर्थिक रूप से कमजोर वर्ग (ईडब्ल्यूएस) प्रमाणपत्र", "गरीबी रेखा से नीचे (बीपीएल) प्रमाणपत्र", 
        "नॉन-क्रीमी लेयर प्रमाणपत्र", "विकलांगता प्रमाणपत्र", "चिकित्सा फिटनेस प्रमाणपत्र", 
        "पीएफ प्रमाणपत्र", "उत्तराधिकार प्रमाणपत्र"
      ]
    },
    {
      icon: <Users className="w-10 h-10 text-dark-gold" />,
      title: "पेंशन और कल्याण सेवाएं",
      description: "पेंशन आवेदन, सामाजिक कल्याण योजनाओं और सरकारी लाभों में सहायता।",
      items: [
        "वृद्ध पेंशन प्रमाणपत्र", "विकलांग पेंशन प्रमाणपत्र", "विधवा पेंशन प्रमाणपत्र", 
        "किसान पेंशन प्रमाणपत्र", "अटल पेंशन योजना प्रमाणपत्र", "एनएसएपी लाभार्थी प्रमाणपत्र", 
        "आईजीएनओएपीएस प्रमाणपत्र", "आईजीएनडब्ल्यूपीएस प्रमाणपत्र", "आईजीएनडीपीएस प्रमाणपत्र", "पीएम-एसवाईएम प्रमाणपत्र"
      ]
    },
    {
      icon: <List className="w-10 h-10 text-dark-gold" />,
      title: "डिजिटल सेवाएं",
      description: "आधार अपडेट, पैन कार्ड सेवाएं, बिल भुगतान और ऑनलाइन फॉर्म जमा करना।",
      items: [
        "पैन कार्ड", "बिल भुगतान", "रिचार्ज", "आधार अपडेट", "प्लास्टिक आधार", 
        "सरकारी फॉर्म भरना", "पासपोर्ट", "ड्राइविंग लाइसेंस", "मतदाता पहचान पत्र", 
        "राशन कार्ड आवेदन", "डिजिलॉकर एक्सेस", "ई-श्रम कार्ड", "आयुष्मान भारत कार्ड", 
        "फास्टैग सेवाएं", "मोबाइल नंबर लिंकिंग", "यूएएन (ईपीएफओ) सेवाएं", "जीएसटी पंजीकरण", 
        "कोविन प्रमाणपत्र डाउनलोड", "संपत्ति कर भुगतान", "पानी/बिजली कनेक्शन आवेदन", 
        "भूमि रिकॉर्ड सेवाएं (भूलेख)", "आयकर फाइलिंग", "जन्म/मृत्यु प्रमाणपत्र डाउनलोड", 
        "छात्रवृत्ति आवेदन जमा करना", "स्कूल/कॉलेज प्रवेश फॉर्म भरना", 
        "रोजगार एक्सचेंज पंजीकरण"
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
    <div id="csc-services" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">सीएससी सेवाएं</h2>
          <p className="text-dark-muted max-w-3xl mx-auto">
            हमारा कॉमन सर्विस सेंटर आवश्यक कागजी कार्रवाई को आसान बनाने के लिए व्यापक सरकारी दस्तावेजीकरण सेवाएं प्रदान करता है।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cscServices.map((service, index) => (
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

export default CSCServices;
