import { useRef, useEffect } from 'react';
import { Zap, Target, Layers, Clock, Users, Award } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Innovation Prioritaire',
    desc: 'Chaque projet commence par une perspective nouvelle. J\'applique les dernières technologies et une pensée créative pour résoudre des problèmes complexes de manière élégante.',
  },
  {
    icon: Target,
    title: 'Axé sur les Résultats',
    desc: 'Je me concentre sur des résultats mesurables — pas seulement sur de belles interfaces. Vos indicateurs de succès guident chaque décision technique et de design.',
  },
  {
    icon: Layers,
    title: 'Expertise Full-Stack',
    desc: 'De l\'architecture de base de données à l\'interface utilisateur parfaite, je gère tout le cycle de vie du produit — éliminant les frictions et délais.',
  },
  {
    icon: Clock,
    title: 'Livraison Ponctuelle',
    desc: 'Les délais sont des engagements. Une planification rigoureuse et une exécution agile garantissent que votre produit sort quand il le faut.',
  },
  {
    icon: Users,
    title: 'Centré sur le Client',
    desc: 'Une communication transparente à chaque étape. Vous êtes toujours au courant, avec une pleine propriété de votre projet.',
  },
  {
    icon: Award,
    title: 'Qualité Premium',
    desc: 'Qualité du code, précision du design et optimisation des performances sont des standards non négociables dans chaque livrable.',
  },
];

const stats = [
  { value: '50+', label: 'Projets Réalisés' },
  { value: '30+', label: 'Clients Heureux' },
  { value: '3+', label: 'Années d\'Expérience' },
  { value: '100%', label: 'Satisfaction Client' },
];

export default function Impact() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" className="py-28 relative overflow-hidden" ref={sectionRef}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(14,165,233,0.06) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="section-tag justify-center">Pourquoi me choisir</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            La Différence Qui <span className="gradient-text">Compte</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Je ne me contente pas de construire des produits — je crée des avantages compétitifs. Voici ce qui distingue mon approche.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map((item, i) => (
            <div
              key={item.title}
              className="reveal group glass-light rounded-2xl p-7 border border-white/5 hover:border-electric/25 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                style={{ background: 'rgba(14,165,233,0.12)' }}
              >
                <item.icon size={22} className="text-electric" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal glass rounded-3xl p-10 border border-electric/10 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{ background: 'radial-gradient(ellipse at center, rgba(14,165,233,0.3), transparent 70%)' }}
          />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
