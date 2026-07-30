import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en');

  const setLang = (newLang) => {
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
    document.documentElement.style.fontFamily = newLang === 'ar' ? "'Cairo', sans-serif" : "'Inter', sans-serif";
    setLangState(newLang);
  };

  useEffect(() => {
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = 'en';
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
