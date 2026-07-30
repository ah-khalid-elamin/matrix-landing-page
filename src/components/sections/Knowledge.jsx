import { useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { motion, AnimatePresence } from 'framer-motion';

export default function Knowledge() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="knowledge" className="py-24 bg-[#0B1120] text-white relative">
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff11 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            {t.knowledge.title}
            <div className="absolute -bottom-2 start-0 w-12 h-1 bg-[#E85A1A]"></div>
          </h2>
          <p className="text-lg text-white/70 mt-6 max-w-2xl">{t.knowledge.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 flex flex-col gap-2">
            {t.knowledge.clusters.map((cluster, idx) => (
              <button key={cluster.id} onClick={() => setActiveTab(idx)}
                className={`text-start px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex justify-between items-center ${
                  activeTab === idx
                    ? 'bg-[#E85A1A] text-white shadow-lg'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}>
                {cluster.name}
                <i className={`fa-solid fa-chevron-right text-sm rtl:rotate-180 transition-opacity ${activeTab === idx ? 'opacity-100' : 'opacity-0'}`}></i>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 min-h-[300px] flex items-center relative overflow-hidden">
            <div className="absolute top-0 end-0 w-64 h-64 bg-[#E85A1A]/20 rounded-full blur-[80px]"></div>
            <AnimatePresence mode="wait">
              <motion.div key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="inline-block px-3 py-1 bg-[#E85A1A]/20 text-[#E85A1A] border border-[#E85A1A]/30 rounded-full text-sm font-semibold mb-4">
                  Cluster 0{activeTab + 1}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">{t.knowledge.clusters[activeTab].name}</h3>
                <p className="text-lg text-white/80 leading-relaxed">{t.knowledge.clusters[activeTab].content}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
