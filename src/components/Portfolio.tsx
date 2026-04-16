import { ExternalLink, Github, Eye, X } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const projects = [
  {
    title: 'Oradie Portfolio',
    desc: 'Portfolio digital intelligent avec une interface élégante, des solutions d\'IA et un design créatif.',
    image: '/oradie-hero.png',
    link: 'https://oradie-portfolio.vercel.app/',
    tags: ['React', 'AI', 'Creative Design'],
    category: 'Website',
    color: '#0ea5e9',
    github: null,
  },
  {
    title: 'Facial Recognition System',
    desc: 'Application de reconnaissance faciale boostée par l\'IA avec détection en temps réel et contrôle d\'accès.',
    image: '/facial-recognition.png',
    link: '#',
    tags: ['Python', 'OpenCV', 'AI/ML', 'Django'],
    category: 'AI / ML',
    color: '#0ea5e9',
    github: 'https://github.com/06Rubain',
  },
  {
    title: 'Smart Tracking Platform',
    desc: 'Système de suivi intelligent basé sur l\'IoT pour la gestion de flotte et le monitoring d\'actifs.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#',
    tags: ['React', 'Node.js', 'IoT', 'Maps API'],
    category: 'Web App',
    color: '#38bdf8',
    github: null,
  },
  {
    title: 'OmniCom Corporate Site',
    desc: 'Site web professionnel pour OmniCom avec interface moderne, animations et CMS intégré.',
    image: '/omnicom.png',
    link: 'https://omnicom-agency.vercel.app/',
    tags: ['React', 'Tailwind', 'Django', 'PostgreSQL'],
    category: 'Website',
    color: '#0284c7',
    github: null,
  },
  {
    title: 'Campus Market',
    desc: 'Plateforme E-commerce étudiante pour la vente de produits locaux, services de restauration et gestion des commandes.',
    image: '/campus-market.jpeg',
    link: '#',
    tags: ['E-Commerce', 'React', 'Node.js', 'PostgreSQL'],
    category: 'Web App',
    color: '#0ea5e9',
    github: null,
  },
  {
    title: 'Student Connect',
    desc: 'Plateforme centrale pour fusionner vos talents, analyser votre parcours SWOT et accélérer votre insertion IPS.',
    image: '/studentconnect.png',
    link: 'https://student-connect-topaz.vercel.app/',
    tags: ['React', 'Réseau Social'],
    category: 'Web App',
    color: '#0ea5e9',
    github: null,
  },
  {
    title: 'SO-GA Mille Services',
    desc: 'Votre partenaire de confiance en RDC. Excellence, professionnalisme et satisfaction client au coeur de nos missions.',
    image: '/soga.png',
    link: 'https://so-ga.vercel.app/',
    tags: ['Corporate', 'Design'],
    category: 'Website',
    color: '#38bdf8',
    github: null,
  }
];

const categories = ['All', 'AI / ML', 'Web App', 'Website'];

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
              {cat === 'All' ? 'Tous' : cat}
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
                  <button 
                    onClick={() => setSelectedImage(project.image)}
                    className="w-11 h-11 rounded-full glass-light border border-white/15 flex items-center justify-center text-white hover:bg-electric hover:border-electric transition-all duration-200"
                    title="Voir en plein écran"
                  >
                    <Eye size={18} />
                  </button>
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full glass-light border border-white/15 flex items-center justify-center text-white hover:bg-electric hover:border-electric transition-all duration-200"
                      title="Voir le code"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.link !== '#' && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full glass-light border border-white/15 flex items-center justify-center text-white hover:bg-electric hover:border-electric transition-all duration-200"
                      title="Visiter le site"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
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

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 md:p-10 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Fullscreen view" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
