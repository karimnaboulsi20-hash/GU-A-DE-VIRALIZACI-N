import React from 'react';
import { ASSETS } from '../data/upsellContent';
import { PlayCircle, Award, CheckCircle, TrendingUp, Users } from 'lucide-react';

export const SocialProofStrip: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* Studio Backdrop & Creator Results */}
      <div className="relative rounded-3xl overflow-hidden border border-blue-500/25 bg-[#070B18] shadow-2xl mb-8">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={ASSETS.studioBackdrop}
            alt="Estudio de creación y análisis viral"
            className="w-full h-full object-cover object-center filter brightness-90"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B18] via-[#070B18]/70 to-transparent" />

          {/* Overlay Headline */}
          <div className="absolute bottom-6 left-6 right-6 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-1.5 block">
              Comprobado En Cuentas Reales
            </span>
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Diseñado Para Creadores, Marcas Personales y Emprendedores Digitales
            </h3>
          </div>
        </div>

        {/* 4 Quantitative Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#070B18] border-t border-slate-800">
          <div className="p-3">
            <p className="text-2xl sm:text-3xl font-black font-mono text-cyan-400 tabular-nums">
              +48.5M
            </p>
            <p className="text-xs text-slate-300 font-semibold mt-0.5">
              Vistas acumuladas
            </p>
            <p className="text-[11px] text-slate-500">En los últimos 90 días</p>
          </div>

          <div className="p-3">
            <p className="text-2xl sm:text-3xl font-black font-mono text-blue-400 tabular-nums">
              89.4%
            </p>
            <p className="text-xs text-slate-300 font-semibold mt-0.5">
              Retención promedio
            </p>
            <p className="text-[11px] text-slate-500">Primeros 3 segundos</p>
          </div>

          <div className="p-3">
            <p className="text-2xl sm:text-3xl font-black font-mono text-emerald-400 tabular-nums">
              14 Días
            </p>
            <p className="text-xs text-slate-300 font-semibold mt-0.5">
              Tiempo a primer viral
            </p>
            <p className="text-[11px] text-slate-500">Promedio de estudiantes</p>
          </div>

          <div className="p-3">
            <p className="text-2xl sm:text-3xl font-black font-mono text-purple-400 tabular-nums">
              3 Redes
            </p>
            <p className="text-xs text-slate-300 font-semibold mt-0.5">
              TikTok, Reels y Shorts
            </p>
            <p className="text-[11px] text-slate-500">Mismo video viralizado</p>
          </div>
        </div>
      </div>
    </section>
  );
};
