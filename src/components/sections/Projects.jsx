import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';

const projectImages = [
  'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1120] mb-4 relative inline-block">
            {t.projects.title}
            <div className="absolute -bottom-2 start-0 w-12 h-1 bg-[#E85A1A]"></div>
          </h2>
          <p className="text-lg text-[#0B1120]/70 mt-6">{t.projects.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.projects.items.map((project, idx) => (
            <motion.div key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6">
                <img src={projectImages[idx]} alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#0B1120]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-4 start-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#0B1120] text-xs font-bold rounded shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#0B1120] mb-3 group-hover:text-[#E85A1A] transition-colors">
                {project.title}
              </h3>
              <p className="text-[#0B1120]/70 text-lg leading-relaxed">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
