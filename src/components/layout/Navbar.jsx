import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#competencies', label: t.nav.competencies },
    { href: '#knowledge', label: t.nav.knowledge },
    { href: '#projects', label: t.nav.projects },
    { href: '#team', label: t.nav.team },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-[#0B1120]/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            {/* <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 80V20L50 55L80 20V80" stroke="#E85A1A" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> */}
            <img src="/logo.png" alt="Matrix Logo" className="w-10 h-10 object-contain" />
            <span className="text-2xl font-bold tracking-wider text-white">{t.nav.company}</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}
                  className="text-sm font-medium text-white/80 hover:text-[#E85A1A] transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="px-4 py-2 text-sm font-semibold rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <i className="fa-solid fa-globe"></i>
              {lang === 'en' ? 'عربي' : 'English'}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="text-white text-sm font-bold">
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B1120] border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-white/80 hover:text-[#E85A1A] hover:bg-white/5 rounded-md">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
