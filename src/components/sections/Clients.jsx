import { useLanguage } from '@/hooks/use-language';

const logos = [
  { name: 'UNDP', icon: 'fa-globe' },
  { name: 'The World Bank', icon: 'fa-building-columns' },
  { name: 'IFAD', icon: 'fa-seedling' },
  { name: 'UNICEF', icon: 'fa-hands-holding-circle' },
  { name: 'USAID', icon: 'fa-handshake' },
  { name: 'FAO', icon: 'fa-wheat-awn' },
];

export default function Clients() {
  const { t } = useLanguage();

  return (
    <section className="py-16 border-y border-slate-200 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-xl font-bold text-[#0B1120]/50 uppercase tracking-widest">{t.clients.title}</h2>
      </div>
      <div className="relative w-full flex overflow-x-hidden">
        <div className="flex whitespace-nowrap gap-16 md:gap-32 px-8 animate-[marquee_25s_linear_infinite]">
          {[...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center gap-3 text-[#0B1120]/40 hover:text-[#E85A1A] transition-colors">
              <i className={`fa-solid ${logo.icon} text-4xl`}></i>
              <span className="text-2xl font-bold tracking-tight">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
