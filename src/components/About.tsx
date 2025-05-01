import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, ShieldCheck, Laptop } from 'lucide-react';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
  
  const contentBlocks = [
    {
      title: "Authorized CSC Centre",
      description: "As an authorized Common Service Centre (CSC), we offer a wide range of government-related services including ID updates, document applications, utility payments, and citizen welfare schemes. With a focus on transparency and efficiency, we ensure that every service is delivered in compliance with official standards, making government access simple and trustworthy for all.",
      icon: Building2
    },
    {
      title: "NIC – National Insurance Company Certified Agent",
      description: "With over 15 years of experience as a certified agent of National Insurance Company, we provide trusted guidance on selecting the right insurance coverage. From vehicles and health to agriculture and businesses, we help you safeguard what matters most with tailored, affordable policies backed by expert knowledge and personal care.",
      icon: ShieldCheck
    },
    {
      title: "Digital Services & Support",
      description: "At Janpero Digital Shield, we deliver reliable digital solutions under one roof. Whether it's handling tax filings, downloading official certificates, or managing online registrations, our center simplifies complex processes for individuals and businesses alike, ensuring smooth, secure, and timely service every step of the way.",
      icon: Laptop
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-16 bg-dark-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" ref={headingRef}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-dark-muted max-w-3xl mx-auto">
            Your trusted partner for insurance and government services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={contentRef}>
          {contentBlocks.map((block, index) => (
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
