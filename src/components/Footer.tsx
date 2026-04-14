import { MessageCircle, Linkedin, Facebook, Mail, ArrowUp, Github } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    icon: MessageCircle,
    href: 'https://whatsapp.com/channel/0029VbAS0aW5Ejxp9Zmaby3v',
    label: 'WhatsApp',
    color: 'hover:text-green-400',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/rubain-ntita-5a8598295/',
    label: 'LinkedIn',
    color: 'hover:text-blue-400',
  },
  {
    icon: Facebook,
    href: 'https://web.facebook.com/rubain.ntitant/',
    label: 'Facebook',
    color: 'hover:text-sky-400',
  },
  {
    icon: Mail,
    href: 'mailto:mpunantitarubain@gmail.com',
    label: 'Email',
    color: 'hover:text-electric',
  },
  {
    icon: Github,
    href: 'https://github.com/06Rubain',
    label: 'GitHub',
    color: 'hover:text-white',
  },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(ellipse at bottom center, rgba(14,165,233,0.06), transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#" className="text-2xl font-bold tracking-tight mb-4 inline-block" style={{ fontFamily: 'Syne, sans-serif' }}>
              <span className="text-white">Rubain</span>
              <span className="text-electric"> Ntita</span>
              <span className="text-electric">.</span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-xs">
              Software Engineer &amp; CEO of OmniCom. Building the future through technology, one project at a time.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 rounded-xl glass-light border border-white/8 flex items-center justify-center text-slate-400 ${color} hover:border-electric/30 transition-all duration-200`}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-slate-500 hover:text-electric text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact Info</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:mpunantitarubain@gmail.com"
                className="text-slate-500 hover:text-electric text-sm transition-colors"
              >
                mpunantitarubain@gmail.com
              </a>
              <a
                href="tel:+243988281363"
                className="text-slate-500 hover:text-electric text-sm transition-colors"
              >
                +243 988 281 363
              </a>
              <span className="text-slate-500 text-sm">
                12 Betsaida, Kasangulu, LBB
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-electric text-sm font-semibold italic mb-1">
              "Building the future through technology"
            </p>
            <p className="text-slate-600 text-xs">
              &copy; {new Date().getFullYear()} Rubain Ntita. All rights reserved.
            </p>
          </div>

          <button
            onClick={scrollTop}
            className="w-11 h-11 rounded-xl glass-light border border-white/8 flex items-center justify-center text-slate-400 hover:text-electric hover:border-electric/30 transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={17} />
          </button>
        </div>
      </div>
    </footer>
  );
}
