import { useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject || t.contact.form.subject);
    const body = encodeURIComponent(
      `${formData.message || ''}\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}`
    );

    window.location.href = `mailto:${t.contact.info.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1120] mb-4 relative inline-block">
              {t.contact.title}
              <div className="absolute -bottom-2 start-0 w-12 h-1 bg-[#E85A1A]"></div>
            </h2>
            <p className="text-lg text-[#0B1120]/70 mt-6 mb-10">{t.contact.subtitle}</p>

            <div className="space-y-8">
              {[
                { icon: 'fa-location-dot', label: t.contact.info.addressTitle, value: t.contact.info.address },
                { icon: 'fa-envelope', label: t.contact.info.emailTitle, value: t.contact.info.email },
                { icon: 'fa-phone', label: t.contact.info.phoneTitle, value: t.contact.info.phone, ltr: true },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E85A1A]/10 text-[#E85A1A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`fa-solid ${item.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1120]/60 uppercase tracking-wider mb-1">{item.label}</h4>
                    <p className="text-lg font-medium text-[#0B1120]" dir={item.ltr ? 'ltr' : undefined}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              {[
                { label: t.contact.form.name, type: 'text', name: 'name' },
                { label: t.contact.form.email, type: 'email', name: 'email', ltr: true },
                { label: t.contact.form.subject, type: 'text', name: 'subject' },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-semibold text-[#0B1120] mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    dir={field.ltr ? 'ltr' : undefined}
                    className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E85A1A]/50 focus:border-[#E85A1A] transition-all"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold text-[#0B1120] mb-2">{t.contact.form.message}</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E85A1A]/50 focus:border-[#E85A1A] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#E85A1A] hover:bg-[#E85A1A]/90 text-white font-bold py-4 rounded-md transition-colors"
              >
                {t.contact.form.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
