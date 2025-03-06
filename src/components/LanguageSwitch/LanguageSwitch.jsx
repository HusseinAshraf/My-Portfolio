import i18next from 'i18next';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  
  useEffect(() => {
    if (!i18n.language) {
      i18next.changeLanguage('en');
      document.dir = 'ltr';
    }
  }, [i18n]);

  const switchLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18next.changeLanguage(newLang);
    document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <div>
      <button
        onClick={switchLanguage}
        className="bg-gradient-to-r  from-purple-500 to-indigo-500 text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 py-2 px-4 rounded"
      >
        {i18n.language === 'en' ? 'EN' : 'AR'}
      </button>
    </div>
  );
};

export default LanguageSwitch;
