import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, ShieldCheck, Laptop } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const content = contentRef.current;
    
    gsap.fromTo(heading, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        }
      }
    );
    
    gsap.fromTo(content, 
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
        }
      }
    );
    
    return () => {
      // Clean up ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  
  const content = {
    hi: {
      title: "हमारे बारे में",
      subtitle: "बीमा और सरकारी सेवाओं के लिए आपका विश्वसनीय साथी",
      blocks: [
        {
          title: "अधिकृत सीएससी केंद्र",
          description: "एक अधिकृत कॉमन सर्विस सेंटर (सीएससी) के रूप में, हम आईडी अपडेट, दस्तावेज़ आवेदन, उपयोगिता भुगतान और नागरिक कल्याण योजनाओं सहित सरकारी सेवाओं की एक विस्तृत श्रृंखला प्रदान करते हैं। पारदर्शिता और दक्षता पर ध्यान देते हुए, हम सुनिश्चित करते हैं कि प्रत्येक सेवा आधिकारिक मानकों के अनुसार प्रदान की जाए, जिससे सरकारी सेवाओं तक पहुंच सभी के लिए सरल और विश्वसनीय हो।",
          icon: Building2
        },
        {
          title: "एनआईसी - नेशनल इंश्योरेंस कंपनी के प्रमाणित एजेंट",
          description: "नेशनल इंश्योरेंस कंपनी के प्रमाणित एजेंट के रूप में 15 वर्षों से अधिक के अनुभव के साथ, हम सही बीमा कवरेज चुनने में विश्वसनीय मार्गदर्शन प्रदान करते हैं। वाहन और स्वास्थ्य से लेकर कृषि और व्यवसाय तक, हम विशेषज्ञ ज्ञान और व्यक्तिगत देखभाल के साथ आपकी महत्वपूर्ण चीजों की सुरक्षा में मदद करते हैं।",
          icon: ShieldCheck
        },
        {
          title: "डिजिटल सेवाएं और सहायता",
          description: "जनपेरो डिजिटल शील्ड में, हम एक ही छत के नीचे विश्वसनीय डिजिटल समाधान प्रदान करते हैं। चाहे वह टैक्स फाइलिंग, आधिकारिक प्रमाणपत्र डाउनलोड करना, या ऑनलाइन पंजीकरण प्रबंधित करना हो, हमारा केंद्र व्यक्तियों और व्यवसायों दोनों के लिए जटिल प्रक्रियाओं को सरल बनाता है, हर कदम पर सुचारू, सुरक्षित और समय पर सेवा सुनिश्चित करता है।",
          icon: Laptop
        }
      ]
    },
    en: {
      title: "About Us",
      subtitle: "Your Trusted Partner for Insurance and Government Services",
      blocks: [
        {
          title: "Authorized CSC Center",
          description: "As an authorized Common Service Center (CSC), we provide a comprehensive range of government services including ID updates, document applications, utility payments, and citizen welfare schemes. With a focus on transparency and efficiency, we ensure each service is delivered according to official standards, making government services accessible and reliable for all.",
          icon: Building2
        },
        {
          title: "NIC - National Insurance Company Certified Agent",
          description: "With over 15 years of experience as a certified agent of National Insurance Company, we provide trusted guidance in choosing the right insurance coverage. From vehicles and health to agriculture and business, we help protect what matters most with expert knowledge and personal care.",
          icon: ShieldCheck
        },
        {
          title: "Digital Services & Support",
          description: "At Janpero Digital Shield, we provide reliable digital solutions under one roof. Whether it's tax filing, downloading official certificates, or managing online registrations, our center simplifies complex processes for both individuals and businesses, ensuring smooth, secure, and timely service at every step.",
          icon: Laptop
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section id="about" ref={sectionRef} className="py-16 bg-dark-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" ref={headingRef}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{currentContent.title}</h2>
          <p className="text-dark-muted max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={contentRef}>
          {currentContent.blocks.map((block, index) => (
            <div
              key={index}
              className="service-card bg-dark-card border border-dark-border rounded-lg p-6 hover:border-dark-gold transition-colors duration-300"
            >
              <div className="mb-4">
                <block.icon className="w-10 h-10 text-dark-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{block.title}</h3>
              <p className="text-dark-muted">{block.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
