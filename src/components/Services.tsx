import { useRef, useEffect } from 'react';
import { Globe, LayoutGrid as Layout, Smartphone, Palette, Video, BarChart2, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'From elegant landing pages to full-stack dynamic platforms — fast, secure, and conversion-optimized.',
    benefits: ['SEO-optimized & responsive', 'High-performance architecture', 'Custom CMS integration'],
    tag: 'Most Popular',
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Apps',
    desc: 'Scalable applications that work flawlessly across all devices, built with modern frameworks.',
    benefits: ['Cross-platform compatibility', 'Intuitive UX/UI design', 'API integration & backend'],
    tag: null,
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    desc: 'Distinctive visual identities that tell your story and set you apart from the competition.',
    benefits: ['Logo & brand identity', 'UI/UX design systems', 'Marketing collaterals'],
    tag: null,
  },
  {
    icon: Video,
    title: 'Video Production',
    desc: 'Professional video editing and motion graphics to captivate your audience and elevate your brand.',
    benefits: ['Cinematic editing', 'Motion graphics & VFX', 'Social media formats'],
    tag: null,
  },
  {
    icon: BarChart2,
    title: 'Digital Marketing',
    desc: 'Data-driven strategies that grow your online presence, generate leads, and maximize ROI.',
    benefits: ['SEO & SEM strategy', 'Social media management', 'Performance analytics'],
    tag: null,
  },
  {
    icon: Layout,
    title: 'Tech Consulting',
    desc: 'Expert guidance on digital transformation, architecture decisions, and technology strategy.',
    benefits: ['Tech stack selection', 'Digital roadmap planning', 'Process automation'],
    tag: 'Premium',
  },
];

export default function Services() {
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
    <section id="services" className="py-28 relative" ref={sectionRef}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(14,165,233,0.04) 0%, transparent 70%)' }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="section-tag justify-center">What I Offer</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Services <span className="gradient-text">Designed to Scale</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            End-to-end digital solutions tailored to your goals — from concept to launch and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="reveal group glass-light rounded-2xl p-7 border border-white/5 hover:border-electric/30 transition-all duration-400 hover:-translate-y-2 relative overflow-hidden"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {service.tag && (
                <span className="absolute top-5 right-5 text-xs font-semibold px-3 py-1 rounded-full bg-electric/15 text-electric border border-electric/30">
                  {service.tag}
                </span>
              )}

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'rgba(14,165,233,0.12)' }}
              >
                <service.icon size={24} className="text-electric" />
              </div>

              <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.desc}</p>

              <ul className="space-y-2 mb-6">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 text-electric text-sm font-semibold hover:gap-3 transition-all duration-200 group/btn"
              >
                Get Started <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, transparent, #0ea5e9, transparent)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
