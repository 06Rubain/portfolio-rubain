import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const navLinks = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.portfolio', href: '#portfolio' },
  { key: 'nav.contact', href: '#contact' },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          <span className="text-white">Rubain</span>
          <span className="text-electric">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-slate-400 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {t(link.key as any)}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-electric group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <Globe size={16} />
            <span className="text-sm font-semibold uppercase">{language}</span>
          </button>
          <button
            onClick={() => handleNav('#contact')}
            className="btn-primary text-sm py-2.5 px-5"
          >
            {t('nav.hire')}
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-white/5 px-6 py-5 flex flex-col gap-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-400 text-sm">Language</span>
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="flex items-center gap-2 text-white bg-white/10 px-3 py-1.5 rounded-md"
            >
              <Globe size={16} />
              <span className="text-sm font-semibold uppercase">{language}</span>
            </button>
          </div>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-slate-300 hover:text-electric text-left text-base font-medium transition-colors"
            >
              {t(link.key as any)}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="btn-primary justify-center mt-2"
          >
            {t('nav.hire')}
          </button>
        </div>
      )}
    </nav>
  );
}
