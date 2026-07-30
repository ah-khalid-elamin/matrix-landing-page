import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-1 bg-[#E85A1A] mb-8"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1120] mb-6">{t.about.title}</h2>
            <p className="text-lg text-[#0B1120]/70 leading-relaxed mb-8">{t.about.content}</p>

            <div className="space-y-6">
              {[
                { icon: 'fa-eye', title: t.about.vision, text: t.about.visionText },
                { icon: 'fa-bullseye', title: t.about.mission, text: t.about.missionText },
              ].map((item) => (
                <div key={item.title} className="p-6 bg-slate-50 border-s-4 border-[#E85A1A] rounded-e-lg">
                  <h3 className="text-xl font-bold text-[#0B1120] mb-2 flex items-center gap-3">
                    <i className={`fa-solid ${item.icon} text-[#E85A1A]`}></i>
                    {item.title}
                  </h3>
                  <p className="text-[#0B1120]/70">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
              alt="Team discussing strategy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0B1120]/30"></div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B1120] to-transparent h-1/2"></div>
            <div className="absolute bottom-8 start-8 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#E85A1A] flex items-center justify-center border-4 border-white shadow-lg">
                <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
                  <path d="M20 80V20L50 55L80 20V80" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-white">
                <div className="font-bold text-xl">MATRIX</div>
                <div className="text-sm opacity-80">Est. 2006</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
