import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'hi' ? 'en' : 'hi')}
      className="fixed top-4 right-4 z-50 px-4 py-2 bg-dark-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
    >
      {language === 'hi' ? 'Switch to English' : 'हिंदी में देखें'}
    </button>
  );
};

export default LanguageSwitcher; 