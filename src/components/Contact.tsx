import { useRef, useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin, Facebook, Loader2, CheckCircle2, Github } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setSending(true);
    setError('');

    if (!supabase) {
      setError('Service momentanément indisponible. Veuillez me contacter par email.');
      setSending(false);
      return;
    }

    const { error: dbError } = await supabase.from('contact_messages').insert({
      name: form.name,
      email: form.email,
      subject: `Portfolio: ${form.subject || 'Nouveau message'}`,
      message: form.message,
    });

    setSending(false);
    if (dbError) {
      setError('Something went wrong. Please try again.');
    } else {
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-28 relative" ref={sectionRef}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(14,165,233,0.05) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="section-tag justify-center">Contact</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Construisons Quelque Chose{' '}
            <span className="gradient-text">d'Extraordinaire</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Vous avez un projet en tête ? Contactez-moi et transformons votre idée en réalité.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 reveal-left flex flex-col gap-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-5">Contactez-Moi</h3>
              <div className="flex flex-col gap-5">
                {[
                  { icon: Mail, label: 'Email', value: 'mpunantitarubain@gmail.com', href: `mailto:mpunantitarubain@gmail.com?subject=${encodeURIComponent('Message depuis le Portfolio')}` },
                  { icon: Phone, label: 'Téléphone', value: '+243 988 281 363', href: 'tel:+243988281363' },
                  { icon: MapPin, label: 'Localisation', value: '12 Betsaida, Kasangulu, LBB', href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(14,165,233,0.12)' }}
                    >
                      <Icon size={18} className="text-electric" />
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs uppercase tracking-wider">{label}</div>
                      {href ? (
                        <a href={href} className="text-white text-sm font-medium hover:text-electric transition-colors">
                          {value}
                        </a>
                      ) : (
                        <div className="text-white text-sm font-medium">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Réseaux Sociaux</h4>
              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/243988281363?text=${encodeURIComponent("Bonjour Rubain, j'aimerais discuter avec vous de mon projet (via Portfolio).")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-white/8 hover:border-green-400/40 hover:bg-green-400/5 transition-all duration-200 group"
                >
                  <MessageCircle size={19} className="text-green-400" />
                  <span className="text-slate-300 group-hover:text-white text-sm font-medium">
                    WhatsApp Chat
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/rubain-ntita-5a8598295/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-white/8 hover:border-blue-400/40 hover:bg-blue-400/5 transition-all duration-200 group"
                >
                  <Linkedin size={19} className="text-blue-400" />
                  <span className="text-slate-300 group-hover:text-white text-sm font-medium">
                    LinkedIn
                  </span>
                </a>
                <a
                  href="https://web.facebook.com/rubain.ntitant/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-white/8 hover:border-sky-500/40 hover:bg-sky-500/5 transition-all duration-200 group"
                >
                  <Facebook size={19} className="text-sky-500" />
                  <span className="text-slate-300 group-hover:text-white text-sm font-medium">
                    Facebook
                  </span>
                </a>
                <a
                  href="https://github.com/06Rubain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-white/8 hover:border-slate-400/40 hover:bg-slate-400/5 transition-all duration-200 group"
                >
                  <Github size={19} className="text-slate-400" />
                  <span className="text-slate-300 group-hover:text-white text-sm font-medium">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 reveal-right">
            <div className="glass rounded-2xl p-8 border border-white/5">
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(14,165,233,0.15)' }}
                  >
                    <CheckCircle2 size={32} className="text-electric" />
                  </div>
                  <h3 className="text-white font-bold text-xl">Message Envoyé !</h3>
                  <p className="text-slate-400 max-w-sm">
                    Merci de m'avoir contacté. Je vous répondrai sous 24 heures.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="btn-outline mt-2"
                  >
                    Envoyer un autre
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                        Nom Complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder=""
                        className="px-4 py-3 rounded-xl text-white placeholder-slate-600 text-sm outline-none focus:border-electric transition-colors"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#0ea5e9')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                        Adresse Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="votre@exemple.com"
                        className="px-4 py-3 rounded-xl text-white placeholder-slate-600 text-sm outline-none transition-colors"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#0ea5e9')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                      Sujet
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="De quoi s'agit-il ?"
                      className="px-4 py-3 rounded-xl text-white placeholder-slate-600 text-sm outline-none transition-colors"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#0ea5e9')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Parlez-moi de votre projet..."
                      className="px-4 py-3 rounded-xl text-white placeholder-slate-600 text-sm outline-none resize-none transition-colors"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#0ea5e9')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <Loader2 size={18} className="animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Envoyer le Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
