import { Sparkles } from 'lucide-react';

export default function OmniComBadge() {
  return (
    <a
      href={`https://wa.me/243988281363?text=${encodeURIComponent(
        "Bonjour, je suis intéressé par la création d'un site web ou d'une application comme celui-ci avec OmniCom."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 pr-4 pl-3 py-2 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl hover:bg-[#111]/90 hover:border-white/20 transition-all duration-300 group hover:scale-105"
    >
      <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-electric to-blue-600 flex items-center justify-center">
        <Sparkles size={12} className="text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider leading-none">
          Made with
        </span>
        <span className="text-sm text-white font-bold leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
          OmniCom
        </span>
      </div>
    </a>
  );
}
