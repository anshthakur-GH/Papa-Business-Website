import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = {
    hi: [
      { name: 'मुख्य पृष्ठ', to: 'home' },
      { name: 'हमारे बारे में', to: 'about' },
      { name: 'सेवाएं', to: 'services' },
      { name: 'क्लेम प्रक्रिया', to: 'claims' },
      { name: 'संपर्क करें', to: 'contact' },
    ],
    en: [
      { name: 'Home', to: 'home' },
      { name: 'About Us', to: 'about' },
      { name: 'Services', to: 'services' },
      { name: 'Claims Process', to: 'claims' },
      { name: 'Contact', to: 'contact' },
    ]
  };

  const currentLinks = navLinks[language];
  const brandName = language === 'hi' ? 'संजय सिंह' : 'Sanjay Singh';
  const quoteText = language === 'hi' ? 'कोट प्राप्त करें' : 'Get a Quote';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-dark/90 backdrop-blur-lg shadow-lg' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex items-center cursor-pointer"
          >
            <div className="font-bold text-xl md:text-2xl">
              <span className="text-white">{brandName}</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {currentLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active-nav-link"
                className="nav-link cursor-pointer"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:9721883299" className="btn-primary ml-4">
              {quoteText}
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed top-[60px] right-0 h-screen w-full bg-dark/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          {currentLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active-nav-link"
              className="nav-link py-4 text-xl cursor-pointer"
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <a href="tel:9721883299" className="btn-primary mt-6">
            {quoteText}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
