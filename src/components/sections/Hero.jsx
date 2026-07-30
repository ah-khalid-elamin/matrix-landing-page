import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center bg-[#0B1120] overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff22 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#E85A1A]/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#E85A1A]/10 rounded-full blur-[120px]"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            {lang === 'en' ? (
              <>Pioneering <span className="text-[#E85A1A]">Evidence-Based</span><br />Development</>
            ) : (
              <>رائدة في خدمات <span className="text-[#E85A1A]">التنمية المستدامة</span></>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto"
          >
            {t.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#about"
              className="inline-flex items-center gap-2 bg-[#E85A1A] hover:bg-[#E85A1A]/90 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(232,90,26,0.4)]">
              {t.hero.cta}
              <i className={lang === 'en' ? 'fa-solid fa-arrow-right' : 'fa-solid fa-arrow-left'}></i>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10"
        >
          {[
            { value: '20+', label: t.hero.stats.years },
            { value: '50+', label: t.hero.stats.projects },
            { value: '15+', label: t.hero.stats.clients },
            { value: '6', label: t.hero.stats.clusters },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-[#E85A1A] mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-white/60 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
