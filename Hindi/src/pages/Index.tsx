import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Set dark theme on load
    document.body.classList.add('bg-dark');
    document.body.classList.add('text-dark-text');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Contact />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
