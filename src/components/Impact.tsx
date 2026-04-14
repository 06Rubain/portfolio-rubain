import { useRef, useEffect } from 'react';
import { Zap, Target, Layers, Clock, Users, Award } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Innovation-First',
    desc: 'Every project starts with a fresh perspective. I apply the latest technologies and creative thinking to solve complex problems in elegant ways.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    desc: 'I focus on measurable outcomes — not just beautiful interfaces. Your success metrics guide every design and technical decision.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Expertise',
    desc: 'From database architecture to pixel-perfect UI, I handle the entire product lifecycle — eliminating friction and handoff delays.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'Deadlines are commitments. Rigorous project planning and agile execution ensure your product launches when it should.',
  },
  {
    icon: Users,
    title: 'Client-Centered',
    desc: 'Transparent communication at every step. You are always in the loop, with full ownership of your project.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    desc: 'Code quality, design precision, and performance optimization are non-negotiable standards in every deliverable.',
  },
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '3+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
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
          <div className="section-tag justify-center">Why Work With Me</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            The Difference That{' '}
            <span className="gradient-text">Matters</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            I don't just build products — I build competitive advantages. Here is what sets my approach apart.
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
