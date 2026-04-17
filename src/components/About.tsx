import { useRef, useEffect } from 'react';
import { Briefcase, GraduationCap, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((t) =>
              t.classList.add('visible')
            );
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-28 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, #0ea5e9, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-shrink-0 reveal-left">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl opacity-20"
                style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)' }}
              />
              <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-3xl overflow-hidden border border-electric/20">
                <img
                  src="/about.jpeg"
                  alt="Rubain at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-4 border border-electric/20">
                <div className="text-electric text-2xl font-bold">3+</div>
                <div className="text-slate-400 text-xs mt-0.5">Années d'Expérience</div>
              </div>
            </div>
          </div>

          <div className="flex-1 reveal-right">
            <div className="section-tag">{t('about.tag')}</div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              {t('about.title1')}
              <span className="gradient-text">{t('about.title2')}</span>
            </h2>

            <p className="text-slate-400 leading-relaxed mb-5">
              {t('about.desc1')}
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              {t('about.desc2')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Briefcase, label: 'Rôle', value: 'CEO — OmniCom' },
                { icon: GraduationCap, label: 'Études', value: 'Génie Logiciel' },
                { icon: MapPin, label: 'Localisation', value: 'Kasangulu, LBB, RDC' },
                { icon: Mail, label: 'Email', value: 'mpunantitarubain@gmail.com' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(14,165,233,0.12)' }}>
                    <Icon size={16} className="text-electric" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider">{label}</div>
                    <div className="text-white text-sm font-medium mt-0.5">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/243988281363?text=${encodeURIComponent("Bonjour Rubain, j'aimerais discuter avec vous de mon projet.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Phone size={16} /> {t('about.talk')}
              </a>
              <a
                href="/CV.pdf"
                download
                className="btn-outline"
              >
                <GraduationCap size={16} /> {t('about.downloadCv')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
