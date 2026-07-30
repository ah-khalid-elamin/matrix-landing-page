import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';

export default function Team() {
  const { t } = useLanguage();

  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1120] mb-4 relative inline-block">
            {t.team.title}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#E85A1A]"></div>
          </h2>
          <p className="text-lg text-[#0B1120]/70 mt-6">{t.team.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.team.members.map((member, idx) => (
            <motion.div key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="w-28 h-28 mx-auto bg-slate-100 rounded-full mb-6 flex items-center justify-center border-4 border-slate-50">
                  <i className="fa-solid fa-user text-4xl text-slate-400"></i>
                </div>
                <h3 className="text-lg font-bold text-[#0B1120] mb-1">{member.name}</h3>
                <p className="text-[#E85A1A] font-medium text-sm mb-4">{member.role}</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-100 text-[#0B1120]/60 flex items-center justify-center hover:bg-[#E85A1A] hover:text-white transition-colors">
                    <i className="fa-brands fa-linkedin-in text-sm"></i>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-100 text-[#0B1120]/60 flex items-center justify-center hover:bg-[#E85A1A] hover:text-white transition-colors">
                    <i className="fa-regular fa-envelope text-sm"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
