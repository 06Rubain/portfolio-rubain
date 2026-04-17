import { useRef, useEffect, useState } from 'react';
import { FileText, Award, Download, Eye, X } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const documents = [
  {
    id: 'cv',
    title: 'Curriculum Vitae',
    descFR: 'Mon parcours professionnel détaillé, mes compétences et mon expérience.',
    descEN: 'My detailed professional journey, skills, and experience.',
    fileUrl: '/CV.pdf',
    icon: FileText,
  },
  {
    id: 'diploma',
    title: 'Diplôme Ingénieur',
    descFR: 'Diplôme d\'ingénieur en Génie Logiciel.',
    descEN: 'Software Engineering Degree.',
    fileUrl: '#',
    icon: Award,
  },
  {
    id: 'cert',
    title: 'Certifications Pro',
    descFR: 'Attestations de brevets et de formations.',
    descEN: 'Certificates for professional trainings.',
    fileUrl: '#',
    icon: Award,
  }
];

export default function Documents() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const { language, t } = useLanguage();

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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="documents" className="py-28 relative" ref={sectionRef}>
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle at center right, #38bdf8, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="section-tag justify-center">{t('documents.tag')}</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            {t('documents.title1')} <span className="gradient-text">{t('documents.title2')}</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            {t('documents.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, i) => {
            const Icon = doc.icon;
            return (
              <div
                key={doc.id}
                className="reveal group glass rounded-2xl p-6 border border-white/5 hover:border-electric/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div 
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                  style={{ background: 'radial-gradient(circle, #0ea5e9, transparent)' }} 
                />
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-electric/10 text-electric">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-electric transition-colors">
                    {doc.title}
                  </h3>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {language === 'fr' ? doc.descFR : doc.descEN}
                </p>

                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={() => {
                        if(doc.fileUrl !== '#') setSelectedDoc(doc.fileUrl);
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${doc.fileUrl !== '#' ? 'bg-white/5 text-white hover:bg-electric hover:text-white' : 'bg-white/5 text-slate-500 cursor-not-allowed'}`}
                    disabled={doc.fileUrl === '#'}
                  >
                    <Eye size={16} /> {t('documents.view')}
                  </button>
                  <a 
                    href={doc.fileUrl}
                    download
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${doc.fileUrl !== '#' ? 'border border-white/10 text-slate-300 hover:border-electric hover:text-electric' : 'border border-white/5 text-slate-600 cursor-not-allowed pointer-events-none'}`}
                  >
                    <Download size={16} /> {t('documents.download')}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

       {/* Fullscreen Document Viewer Modal */}
       {selectedDoc && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 md:p-10 animate-fade-in"
          onClick={() => setSelectedDoc(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[70]"
            onClick={() => setSelectedDoc(null)}
          >
            <X size={32} />
          </button>
          
          <div className="relative max-w-5xl w-full h-[85vh] flex items-center justify-center">
            {selectedDoc.endsWith('.pdf') ? (
              <iframe 
                src={selectedDoc} 
                className="w-full h-full rounded-lg shadow-2xl bg-white"
                title="Document viewer"
              />
            ) : (
             <img 
              src={selectedDoc} 
              alt="Document viewer" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
             />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
