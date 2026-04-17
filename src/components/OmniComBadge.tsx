export default function OmniComBadge() {
  return (
    <a
      href="https://omnicom-plateforme.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 pr-4 pl-2 py-2 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl hover:bg-[#111]/90 hover:border-white/20 transition-all duration-300 group hover:scale-105"
    >
      <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-black border border-white/5">
        <img src="/omnicom-logo.jpg" alt="OmniCom Logo" className="w-full h-full object-cover" />
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
