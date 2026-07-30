import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';

const icons = ['fa-chart-pie', 'fa-database', 'fa-leaf', 'fa-book-open', 'fa-laptop-code', 'fa-earth-africa'];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function Competencies() {
  const { t } = useLanguage();

  return (
    <section id="competencies" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1120] mb-4 relative inline-block">
            {t.competencies.title}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#E85A1A]"></div>
          </h2>
          <p className="text-lg text-[#0B1120]/70 mt-6">{t.competencies.subtitle}</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {t.competencies.items.map((comp, idx) => (
            <motion.div key={idx} variants={item}
              className="bg-white p-8 rounded-xl border border-slate-100 relative overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="absolute top-0 start-0 w-1 h-full bg-[#E85A1A] transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              <div className="w-14 h-14 bg-[#E85A1A]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#E85A1A] transition-colors duration-300 text-[#E85A1A] group-hover:text-white">
                <i className={`fa-solid ${icons[idx]} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-[#0B1120] mb-3 leading-tight">{comp.title}</h3>
              <p className="text-[#0B1120]/70 leading-relaxed">{comp.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
