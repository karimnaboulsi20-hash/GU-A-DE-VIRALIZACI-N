import React, { useState } from 'react';
import { Eye, TrendingUp, Compass, Zap, CheckCircle2, ChevronRight, BarChart3, Users, Flame } from 'lucide-react';
import { BENEFITS } from '../data/upsellContent';

export const VisualBenefits: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('benefit-1');

  const getBenefitIcon = (type: string) => {
    switch (type) {
      case 'views':
        return <Eye className="w-6 h-6 text-cyan-400" />;
      case 'speed':
        return <TrendingUp className="w-6 h-6 text-blue-400" />;
      case 'strategy':
        return <Compass className="w-6 h-6 text-cyan-300" />;
      default:
        return <Zap className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-[#06080F] via-[#080D1A] to-[#06080F] border-y border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">
            La Tríada Del Éxito Viral
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
            3 Pilares Para Desbloquear El Algoritmo
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            El Pack te da los videos listos. La Guía Maestra te da las llaves para que cada video llegue a millones.
          </p>
        </div>

        {/* 3 Visual Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {BENEFITS.map((benefit, index) => {
            const isSelected = activeTab === benefit.id;
            return (
              <div
                key={benefit.id}
                onClick={() => setActiveTab(benefit.id)}
                className={`relative rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-blue-950/80 to-[#0A1024] border-2 border-cyan-400 shadow-xl shadow-cyan-950/40'
                    : 'bg-[#080D1A]/80 border border-slate-800 hover:border-slate-700 hover:bg-[#0A1122]'
                }`}
              >
                {/* Card Top */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-700/80">
                      {getBenefitIcon(benefit.iconType)}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-950/90 text-cyan-300 border border-blue-500/30">
                      {benefit.badge}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs font-semibold text-slate-500">
                      Pilar 0{index + 1}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-white tracking-tight mt-1">
                      {benefit.title}
                    </h3>
                    <p className="text-xs font-medium text-cyan-300/90 mt-0.5">
                      {benefit.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {benefit.description}
                  </p>
                </div>

                {/* Card Bottom: Big Metric Display */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-white font-mono tabular-nums">
                        {benefit.metric}
                      </div>
                      <p className="text-[11px] text-slate-400 font-medium">
                        {benefit.metricLabel}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 transition-colors">
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-cyan-400' : ''}`} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Comparison: Con la Guía vs Sin la Guía */}
        <div className="rounded-2xl border border-slate-800 bg-[#070A14] p-5 sm:p-7 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Sin Guía */}
            <div className="p-5 rounded-xl bg-red-950/15 border border-red-500/20">
              <div className="flex items-center gap-2 mb-3 text-red-400 font-heading font-bold text-sm uppercase">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                Solo con los videos (Sin Estrategia)
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Videos estancados en 200 - 500 visualizaciones.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Espectadores se van en el segundo 2 por falta de gancho magnético.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Pérdida de tiempo publicando en horarios que no tienen alcance.</span>
                </li>
              </ul>
            </div>

            {/* Con Guía Viral Master */}
            <div className="p-5 rounded-xl bg-blue-950/30 border border-cyan-500/35 relative">
              <div className="flex items-center gap-2 mb-3 text-cyan-400 font-heading font-bold text-sm uppercase">
                <Flame className="w-4 h-4 text-cyan-400" />
                Con el Método Viral Master Pro
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>+100k a 1M+ vistas</strong> en tus primeros videos aplicando ganchos probados.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Retención psicológica superior al 85%</strong> para que la plataforma impulse tu contenido.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Crecimiento acelerado y diario</strong> de nuevos seguidores orgánicos.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
