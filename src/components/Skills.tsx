import { useRef, useEffect, useState } from 'react';
import { Code2, Smartphone, Palette, Video, TrendingUp, Cpu } from 'lucide-react';

const skills = [
  { icon: Code2, name: 'Web Development', desc: 'HTML, CSS, JS, Django, React', level: 90, color: '#0ea5e9' },
  { icon: Smartphone, name: 'Mobile Applications', desc: 'Cross-platform mobile apps', level: 78, color: '#38bdf8' },
  { icon: Palette, name: 'Graphic Design', desc: 'UI/UX, Branding, Visual Identity', level: 85, color: '#0284c7' },
  { icon: Video, name: 'Video Production', desc: 'Pro editing & motion graphics', level: 80, color: '#0ea5e9' },
  { icon: TrendingUp, name: 'Digital Marketing', desc: 'SEO, Social Media, Campaigns', level: 75, color: '#38bdf8' },
  { icon: Cpu, name: 'Embedded Systems', desc: 'Arduino, IoT, Low-level dev', level: 72, color: '#0284c7' },
];

function SkillCard({
  skill,
  animate,
}: {
  skill: (typeof skills)[0];
  animate: boolean;
}) {
  return (
    <div className="glass-light rounded-2xl p-6 border border-white/5 hover:border-electric/30 transition-all duration-300 group hover:-translate-y-1">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
        style={{ background: `rgba(14,165,233,0.12)` }}
      >
        <skill.icon size={22} className="text-electric" />
      </div>
      <h3 className="text-white font-semibold text-base mb-1">{skill.name}</h3>
      <p className="text-slate-500 text-sm mb-4 leading-relaxed">{skill.desc}</p>
      <div className="flex items-center justify-between text-xs mb-2">
        <span className="text-slate-400">Proficiency</span>
        <span className="text-electric font-semibold">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={
            {
              '--target-width': `${skill.level}%`,
              width: animate ? `${skill.level}%` : '0%',
              transition: animate ? 'width 1.2s ease-out' : 'none',
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

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
            setAnimate(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-28 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="section-tag justify-center">My Skills</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            A versatile skill set spanning software development, design, and digital strategy —
            built to deliver end-to-end solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <SkillCard skill={skill} animate={animate} />
            </div>
          ))}
        </div>

        <div className="mt-16 glass rounded-2xl p-8 border border-electric/10 reveal">
          <div className="text-center mb-6">
            <h3 className="text-white font-semibold text-lg">Technologies &amp; Tools</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python', 'Django', 'JavaScript', 'TypeScript', 'React', 'HTML5', 'CSS3',
              'Tailwind CSS', 'Git', 'GitHub', 'Figma', 'Adobe Premiere', 'Arduino',
              'MySQL', 'PostgreSQL', 'REST APIs', 'Linux', 'VS Code',
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-300 border border-white/8 hover:border-electric/40 hover:text-electric transition-all duration-200 cursor-default"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
