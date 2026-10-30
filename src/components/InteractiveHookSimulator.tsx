import React, { useState } from 'react';
import { Play, Sparkles, TrendingUp, AlertTriangle, CheckCircle, RefreshCw } from 'lucide-react';

interface HookExample {
  category: string;
  normalTitle: string;
  normalViews: string;
  normalRetention: string;
  viralHook: string;
  viralViews: string;
  viralRetention: string;
  growthFactor: string;
}

const EXAMPLES: HookExample[] = [
  {
    category: 'Finanzas y Emprendimiento',
    normalTitle: 'Cómo generar ingresos con contenido en redes',
    normalViews: '240 vistas',
    normalRetention: '14% (Abandono al seg 2)',
    viralHook: 'El método silencioso que usan las cuentas anónimas para facturar $2,400/mes sin mostrar el rostro...',
    viralViews: '1,850,000 vistas',
    viralRetention: '89% (Retención récord)',
    growthFactor: '7,708x',
  },
  {
    category: 'Fitness y Estilo de Vida',
    normalTitle: '3 errores comunes que la gente comete al entrenar',
    normalViews: '410 vistas',
    normalRetention: '19% (Abandono al seg 3)',
    viralHook: 'Si estás haciendo este ejercicio así, estás tirando a la basura el 80% de tus ganancias musculares...',
    viralViews: '2,420,000 vistas',
    viralRetention: '93% (Retención récord)',
    growthFactor: '5,902x',
  },
  {
    category: 'Desarrollo Personal',
    normalTitle: 'Hábitos diarios para ser más productivo hoy',
    normalViews: '185 vistas',
    normalRetention: '11% (Abandono al seg 1)',
    viralHook: 'La regla psicológica de 2 minutos que los multimillonarios usan para nunca procrastinar...',
    viralViews: '3,100,000 vistas',
    viralRetention: '91% (Retención récord)',
    growthFactor: '16,756x',
  },
];

export const InteractiveHookSimulator: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mode, setMode] = useState<'normal' | 'viral'>('viral');

  const current = EXAMPLES[selectedIndex];

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-b from-[#090E20] to-[#06080F] p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Demostración En Vivo: El Poder Del Gancho
          </div>
          <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight">
            Mismo Video, Distinta Estrategia = Resultados Opuestos
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1.5">
            Selecciona una temática y compara qué pasa cuando aplicas las fórmulas de viralización del manual:
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {EXAMPLES.map((ex, idx) => (
            <button
              key={ex.category}
              onClick={() => {
                setSelectedIndex(idx);
                setMode('viral');
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedIndex === idx
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 font-bold'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {ex.category}
            </button>
          ))}
        </div>

        {/* Live Simulator Comparison Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Normal Post */}
          <div
            onClick={() => setMode('normal')}
            className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
              mode === 'normal'
                ? 'bg-red-950/20 border-red-500 shadow-lg'
                : 'bg-slate-950/60 border-slate-800 opacity-70 hover:opacity-100'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Publicar Sin Saber Viralizar
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-red-950 text-red-300 font-mono">
                  Fracaso Común
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-1">Título / Gancho usado:</p>
              <p className="text-sm font-semibold text-slate-200 mb-4 bg-slate-900/90 p-3 rounded-lg border border-slate-800">
                &ldquo;{current.normalTitle}&rdquo;
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800/80 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Alcance final:</span>
                <span className="font-mono font-bold text-red-400">{current.normalViews}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Retención de audiencia:</span>
                <span className="font-mono text-slate-300">{current.normalRetention}</span>
              </div>
            </div>
          </div>

          {/* Viral Master Post */}
          <div
            onClick={() => setMode('viral')}
            className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
              mode === 'viral'
                ? 'bg-blue-950/40 border-cyan-400 shadow-xl shadow-cyan-950/50'
                : 'bg-slate-950/60 border-slate-800 opacity-70 hover:opacity-100'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Con Fórmula Viral Master Pro
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-blue-900 text-cyan-300 font-bold font-mono">
                  Multiplicador {current.growthFactor}
                </span>
              </div>
              <p className="text-xs text-cyan-300/80 mb-1 font-medium">Gancho Magnético Aplicado:</p>
              <p className="text-sm font-bold text-white mb-4 bg-blue-950/80 p-3 rounded-lg border border-cyan-500/40 shadow-inner">
                &ldquo;{current.viralHook}&rdquo;
              </p>
            </div>

            <div className="pt-3 border-t border-cyan-500/30 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-medium">Alcance final:</span>
                <span className="font-mono font-extrabold text-cyan-300 text-base">{current.viralViews}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-medium">Retención de audiencia:</span>
                <span className="font-mono font-bold text-emerald-400">{current.viralRetention}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          *Dentro de la Guía recibirás más de 150 plantillas idénticas a esta para copiar, pegar y viralizar cualquiera de los videos de tu pack.
        </p>
      </div>
    </section>
  );
};
