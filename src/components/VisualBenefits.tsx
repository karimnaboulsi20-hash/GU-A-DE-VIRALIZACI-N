import React, { useState } from 'react';
import { Eye, TrendingUp, Compass, Zap, CheckCircle2, ChevronRight, Flame } from 'lucide-react';
import { BENEFITS } from '../data/upsellContent';

export const VisualBenefits: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('benefit-1');

  const getBenefitIcon = (type: string) => {
    switch (type) {
      case 'views':
        return <Eye className="w-6 h-6 text-emerald-400" />;
      case 'speed':
        return <TrendingUp className="w-6 h-6 text-emerald-300" />;
      case 'strategy':
        return <Compass className="w-6 h-6 text-zinc-300" />;
      default:
        return <Zap className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-[#06080F] via-zinc-950 to-[#06080F] border-y border-zinc-800/60 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-2">
            La Tríada Del Éxito Viral
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
            3 Pilares Para Desbloquear El Algoritmo
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
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
                    ? 'bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-emerald-500 shadow-xl shadow-zinc-950/60'
                    : 'bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50'
                }`}
              >
                {/* Card Top */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                      {getBenefitIcon(benefit.iconType)}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-zinc-900 text-emerald-300 border border-zinc-700">
                      {benefit.badge}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs font-semibold text-zinc-500">
                      Pilar 0{index + 1}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-white tracking-tight mt-1">
                      {benefit.title}
                    </h3>
                    <p className="text-xs font-medium text-emerald-400 mt-0.5">
                      {benefit.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                    {benefit.description}
                  </p>
                </div>

                {/* Card Bottom: Big Metric Display */}
                <div className="pt-4 border-t border-zinc-800">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 font-mono tabular-nums">
                        {benefit.metric}
                      </div>
                      <p className="text-[11px] text-zinc-400 font-medium">
                        {benefit.metricLabel}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 transition-colors">
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-emerald-400' : ''}`} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Comparison: Con la Guía vs Sin la Guía */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-7 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Sin Guía */}
            <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/20">
              <div className="flex items-center gap-2 mb-3 text-red-400 font-heading font-bold text-sm uppercase">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                Solo con los videos (Sin Estrategia)
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
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
            <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-700 relative">
              <div className="flex items-center gap-2 mb-3 text-emerald-400 font-heading font-bold text-sm uppercase">
                <Flame className="w-4 h-4 text-emerald-400" />
                Con el Método Viral Master Pro
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>+100k a 1M+ vistas</strong> en tus primeros videos aplicando ganchos probados.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Retención psicológica superior al 85%</strong> para que la plataforma impulse tu contenido.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
