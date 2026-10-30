import React from 'react';
import { Clock } from 'lucide-react';

interface Props {
  timeLeftSeconds: number;
}

export const TopUrgencyBanner: React.FC<Props> = ({ timeLeftSeconds }) => {
  const minutes = Math.floor(timeLeftSeconds / 60);
  const seconds = timeLeftSeconds % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className="w-full bg-[#05070D] border-b border-blue-900/40 sticky top-0 z-40 backdrop-blur-md">
      {/* Urgency Alert Bar */}
      <div className="bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-950/90 py-2.5 px-4 border-b border-blue-500/20 text-center">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs md:text-sm font-medium">
          <span className="text-cyan-400 font-bold tracking-wide uppercase">
            ¡ALTO! PASO 2 DE 2
          </span>
          <span className="text-slate-300">
            Tu orden del <strong className="text-white">Pack Viral Master</strong> está casi lista
          </span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <div className="inline-flex items-center gap-1.5 text-amber-300 font-semibold tabular-nums">
            <Clock className="w-3.5 h-3.5" />
            <span>Esta oferta expira en: {formattedTime}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-900 h-1.5">
        <div
          className="bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 h-full transition-all duration-500"
          style={{ width: '85%' }}
        />
      </div>

      {/* Clean Top Bar Header */}
      <header className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center">
        {/* Brand wordmark */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="font-heading font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
            <span className="text-cyan-400">VIRAL</span>MASTER
            <span className="text-[10px] font-sans font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-950 border border-blue-500/30 text-cyan-300">
              PRO
            </span>
          </span>
        </div>
      </header>
    </div>
  );
};
