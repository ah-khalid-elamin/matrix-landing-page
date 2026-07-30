import { useLanguage } from '@/hooks/use-language';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0B1120] text-white border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-3">
            {/* <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 80V20L50 55L80 20V80" stroke="#E85A1A" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> */}
            <img src="/logo.png" alt="Matrix Logo" className="w-10 h-10 object-contain" />
            <span className="text-2xl font-bold tracking-wider text-white">{t.footer.company}</span>
          </div>
          <div className="flex gap-4">
            {['fa-linkedin-in', 'fa-twitter', 'fa-facebook-f'].map((icon) => (
              <a key={icon} href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E85A1A] transition-colors">
                <i className={`fa-brands ${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
