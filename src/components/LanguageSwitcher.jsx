import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
    const { language, changeLanguage, translations } = useLanguage();

    return (
        <div>
            <button onClick={() => changeLanguage('en')} hidden={language === 'en'} >
                English
            </button>
            <button onClick={() => changeLanguage('ar')} hidden={language === 'ar'}  >
                العربية
            </button>
        </div>
    );
};

export default LanguageSwitcher;
