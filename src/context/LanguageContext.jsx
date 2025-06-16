// src/context/LanguageContext.jsx
import React, {
    createContext,
    useState,
    useContext,
    useEffect,
    useCallback,
  } from 'react';
  
  const LanguageContext = createContext();
  
  // Predefined list of supported languages
  const SUPPORTED_LANGUAGES = ['en', 'ar'];
  
  export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
      return localStorage.getItem('appLanguage') || 'en';
    });
  
    // New state for translations and loading status
    const [translations, setTranslations] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const isRTL = language === 'ar' 
  
    // Memoized translation loader
    const loadTranslations = useCallback(
      async lang => {
        if (!SUPPORTED_LANGUAGES.includes(lang)) return;
  
        setIsLoading(true);
        setError(null);
  
        try {
          // Dynamic import for code-splitting
          const module = await import(`../locales/${lang}.json`);
          setTranslations(module.default || module);
  
          // Update document attributes only after successful load
          document.documentElement.lang = lang;
          document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
          document.documentElement.style.direction = isRTL ? 'rtl' : 'ltr';
        } catch (err) {
          console.error(`Failed to load ${lang} translations:`, err);
          setError(err);
  
          // Fallback to English if current language fails
          if (lang !== 'en') {
            localStorage.setItem('appLanguage', 'en');
            setLanguage('en');
          }
        } finally {
          setIsLoading(false);
        }
      },
      [isRTL]
    );
  
    // Load translations on initial mount and language change
    useEffect(() => {
      loadTranslations(language);
    }, [language, loadTranslations]);
  
    const changeLanguage = newLang => {
      if (!SUPPORTED_LANGUAGES.includes(newLang)) {
        console.warn(`Unsupported language: ${newLang}`);
        return;
      }
  
      // Only update if language actually changes
      if (newLang !== language) {
        setLanguage(newLang);
        localStorage.setItem('appLanguage', newLang);
      }
    };
  
    // Context value
    const contextValue = {
      language,
      changeLanguage,
      isRTL,
      translations,
      isLoading,
      error,
      supportedLanguages: SUPPORTED_LANGUAGES,
    };
  
    return (
      <LanguageContext.Provider value={contextValue}>
        {children}
      </LanguageContext.Provider>
    );
  };
  
  export const useLanguage = () => useContext(LanguageContext);
  