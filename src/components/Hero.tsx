import { useEffect, useState } from 'react';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const rolesFR = [
  'Ingénieur Logiciel',
  'Entrepreneur Tech',
  'PDG de OmniCom',
  'Innovateur Digital',
];

const rolesEN = [
  'Software Engineer',
  'Tech Entrepreneur',
  'CEO of OmniCom',
  'Digital Innovator',
];

export default function Hero() {
  const { language, t } = useLanguage();
  const roles = language === 'fr' ? rolesFR : rolesEN;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 animate-blob"
          style={{ background: 'radial-gradient(circle, #0ea5e9, transparent)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 animate-blob"
          style={{
            background: 'radial-gradient(circle, #0284c7, transparent)',
            animationDelay: '3s',
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-6 animate-blob"
          style={{
            background: 'radial-gradient(circle, #38bdf8, transparent)',
            animationDelay: '5s',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-16">
        <div
          className={`flex-1 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="section-tag mb-6">{t('hero.available')}</div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight mb-6">
            <span className="text-white">{t('hero.build')}</span>
            <span className="gradient-text">{t('hero.powerful')}</span>
            <br />
            <span className="text-white">{t('hero.digital')}</span>
            <span className="gradient-text">{t('hero.smart')}</span>
          </h1>

          <div className="flex items-center gap-3 mb-6 h-8">
            <span className="text-slate-400 text-lg">{t('hero.iam')}</span>
            <span className="text-electric text-lg font-semibold min-w-[200px]">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-10">
            {t('hero.desc')}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-base py-4 px-8"
            >
              {t('hero.viewProjects')} <ArrowRight size={18} />
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline text-base py-4 px-8"
            >
              {t('hero.getInTouch')}
            </button>
          </div>

          <div className="flex items-center gap-10 mt-12 pt-10 border-t border-white/5">
            {[
              { value: '50+', label: 'Projets Réalisés' },
              { value: '3+', label: 'Années d\'Expérience' },
              { value: '100%', label: 'Clients Satisfaits' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-slate-500 text-xs mt-1 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`flex-shrink-0 transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl animate-glow-pulse"
              style={{
                background: 'linear-gradient(135deg, rgba(14,165,233,0.3), transparent)',
                transform: 'scale(1.05)',
                borderRadius: '24px',
              }}
            />
            <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-3xl overflow-hidden glass border border-electric/20">
              <img
                src="/hero.jpeg"
                alt="Rubain Ntita"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(3,7,18,0.7) 0%, transparent 60%)',
                }}
              />
            </div>

            <div className="absolute -bottom-5 -left-8 glass rounded-2xl p-4 border border-electric/20 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white text-sm font-medium">Disponible</span>
              </div>
            </div>

            <div className="absolute -top-5 -right-6 glass rounded-2xl p-4 border border-electric/20 animate-float" style={{ animationDelay: '2.5s' }}>
              <div className="text-center">
                <div className="text-electric text-xl font-bold">CEO</div>
                <div className="text-slate-400 text-xs">OmniCom</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-electric transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
