import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Award, FileText } from 'lucide-react';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const content = contentRef.current;
    const stats = statsRef.current;
    
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
    
    gsap.fromTo(stats, 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        }
      }
    );
    
    return () => {
      // Clean up ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  
  return (
    <section id="about" ref={sectionRef} className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">About Us</h2>
          </div>
          
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <div className="w-16 h-16 rounded-full bg-dark/50 flex items-center justify-center mb-4">
                  <Shield className="text-dark-gold w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Authorized CSC Centre</h3>
                <p className="text-dark-muted">
                  As an authorized Common Service Centre (CSC), we offer a wide range of government-related services including ID updates, document applications, utility payments, and citizen welfare schemes. With a focus on transparency and efficiency, we ensure that every service is delivered in compliance with official standards, making government access simple and trustworthy for all.
                </p>
              </div>
              
              <div className="flex flex-col items-center md:items-start">
                <div className="w-16 h-16 rounded-full bg-dark/50 flex items-center justify-center mb-4">
                  <Award className="text-dark-gold w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">NIC – National Insurance Company Certified Agent</h3>
                <p className="text-dark-muted">
                  With over 15 years of experience as a certified agent of National Insurance Company, we provide trusted guidance on selecting the right insurance coverage. From vehicles and health to agriculture and businesses, we help you safeguard what matters most with tailored, affordable policies backed by expert knowledge and personal care.
                </p>
              </div>
              
              <div className="flex flex-col items-center md:items-start">
                <div className="w-16 h-16 rounded-full bg-dark/50 flex items-center justify-center mb-4">
                  <FileText className="text-dark-gold w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Digital Services & Support</h3>
                <p className="text-dark-muted">
                  At Janpero Digital Shield, we deliver reliable digital solutions under one roof. Whether it's handling tax filings, downloading official certificates, or managing online registrations, our center simplifies complex processes for individuals and businesses alike, ensuring smooth, secure, and timely service every step of the way.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="card">
              <h4 className="text-4xl font-bold text-dark-blue mb-2">15+</h4>
              <p className="text-dark-muted">Years Experience</p>
            </div>
            
            <div className="card">
              <h4 className="text-4xl font-bold text-dark-blue mb-2">24/7</h4>
              <p className="text-dark-muted">Claims Support</p>
            </div>
            
            <div className="card">
              <h4 className="text-4xl font-bold text-dark-blue mb-2">10+</h4>
              <p className="text-dark-muted">Government Services</p>
            </div>
            
            <div className="card">
              <h4 className="text-4xl font-bold text-dark-blue mb-2">5000+</h4>
              <p className="text-dark-muted">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
