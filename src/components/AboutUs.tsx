import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShieldCheck, Laptop } from 'lucide-react';

const AboutUs: React.FC = () => {
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
    <section className="py-16 bg-dark-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-dark-muted max-w-3xl mx-auto">
            Comprehensive solutions for all your insurance and government service needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contentBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="service-card bg-dark-card border border-dark-border rounded-lg p-6 hover:border-dark-gold transition-colors duration-300"
            >
              <div className="mb-4">
                <block.icon className="w-10 h-10 text-dark-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{block.title}</h3>
              <p className="text-dark-muted">{block.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 