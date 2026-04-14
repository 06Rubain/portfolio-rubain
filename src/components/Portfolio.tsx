import { useRef, useEffect, useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const projects = [
  {
    title: 'Facial Recognition System',
    desc: 'AI-powered facial recognition application with real-time detection, user authentication, and access control features.',
    image: '/facial-recognition.png',
    tags: ['Python', 'OpenCV', 'AI/ML', 'Django'],
    category: 'AI / ML',
    color: '#0ea5e9',
  },
  {
    title: 'Smart Tracking Platform',
    desc: 'Intelligent IoT-based tracking system for fleet management and asset monitoring with live dashboards.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'IoT', 'Maps API'],
    category: 'Web App',
    color: '#38bdf8',
  },
  {
    title: 'OmniCom Corporate Site',
    desc: 'Premium corporate website for OmniCom featuring modern UI, animations, and a full-stack CMS.',
    image: '/omnicom.png',
    tags: ['React', 'Tailwind', 'Django', 'PostgreSQL'],
    category: 'Website',
    color: '#0284c7',
  },
  {
    title: 'Campus Market',
    desc: 'Plateforme E-commerce étudiante pour la vente de produits locaux, services de restauration et gestion des commandes.',
    image: '/campus-market.jpeg',
    tags: ['E-Commerce', 'React', 'Node.js', 'PostgreSQL'],
    category: 'Web App',
    color: '#0ea5e9',
  },
  {
    title: 'Student Connect',
    desc: 'Plateforme centrale pour fusionner vos talents, analyser votre parcours SWOT et accélérer votre insertion IPS.',
    image: '/studentconnect.png',
    tags: ['React', 'Réseau Social'],
    category: 'Web App',
    color: '#0ea5e9',
  },
  {
    title: 'SO-GA Mille Services',
    desc: 'Votre partenaire de confiance en RDC. Excellence, professionnalisme et satisfaction client au coeur de nos missions.',
    image: '/soga.png',
    tags: ['Corporate', 'Design'],
    category: 'Website',
    color: '#38bdf8',
  }
];

const categories = ['All', 'AI / ML', 'Web App', 'Website', 'Marketing', 'Embedded'];

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState('All');
  const { t } = useLanguage();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((t) => t.classList.add('visible'));
          }
        });
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-28 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <div className="section-tag justify-center">{t('portfolio.tag')}</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t('portfolio.title1')} <span className="gradient-text">{t('portfolio.title2')}</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            {t('portfolio.desc')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-electric text-white shadow-lg'
                  : 'glass-light text-slate-400 hover:text-white border border-white/8 hover:border-electric/30'
              }`}
              style={filter === cat ? { boxShadow: '0 0 20px rgba(14,165,233,0.4)' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="reveal group relative rounded-2xl overflow-hidden border border-white/5 hover:border-electric/30 transition-all duration-400 hover:-translate-y-2"
              style={{
                background: 'rgba(15,23,42,0.5)',
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
                  style={{ background: 'rgba(3,7,18,0.75)', backdropFilter: 'blur(4px)' }}
                >
                  <button className="w-11 h-11 rounded-full glass-light border border-white/15 flex items-center justify-center text-white hover:bg-electric hover:border-electric transition-all duration-200">
                    <Eye size={18} />
                  </button>
                  <button className="w-11 h-11 rounded-full glass-light border border-white/15 flex items-center justify-center text-white hover:bg-electric hover:border-electric transition-all duration-200">
                    <Github size={18} />
                  </button>
                  <button className="w-11 h-11 rounded-full glass-light border border-white/15 flex items-center justify-center text-white hover:bg-electric hover:border-electric transition-all duration-200">
                    <ExternalLink size={18} />
                  </button>
                </div>

                <span
                  className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full text-white"
                  style={{ background: project.color + '33', border: `1px solid ${project.color}55` }}
                >
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-electric transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md text-slate-400"
                      style={{ background: 'rgba(255,255,255,0.05)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
