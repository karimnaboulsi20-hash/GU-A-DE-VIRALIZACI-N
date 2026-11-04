import React from 'react';
import { ASSETS, PROBLEM_STATEMENT } from '../data/upsellContent';
import { Flame, TrendingUp, AlertCircle, Eye, Award } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-12 overflow-hidden">
      {/* Background neutral ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-zinc-800/10 rounded-full blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Pre-headline Badge */}
        <div className="flex justify-center mb-5 px-2">
          <div className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 text-[11px] sm:text-xs font-semibold tracking-wide uppercase shadow-lg text-center">
            <span className="inline-flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Mejora Exclusiva</span>
            </span>
            <span className="text-zinc-600 hidden sm:inline">·</span>
            <span className="text-amber-400">Oferta de 1 Sola Vez</span>
          </div>
        </div>

        {/* Main Headline requested by user */}
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center text-white tracking-tight uppercase leading-[1.1] max-w-5xl mx-auto mb-6 text-balance">
          ¡NO BASTA CON TENER VIDEOS VIRALES.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            TIENES QUE SABER CÓMO VIRALIZARLOS!
          </span>
        </h1>

        {/* The Problem Statement */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-zinc-800 shadow-xl backdrop-blur-sm">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-emerald-400 shrink-0 mt-0.5">
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-base sm:text-lg font-medium text-zinc-100 leading-snug mb-2">
                  &ldquo;{PROBLEM_STATEMENT.quote}&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {PROBLEM_STATEMENT.subtext}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Mockup Visual Showcase & Smartphone Growth Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-12">
          {/* Main 3D Guide Mockup (7 cols) */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
              <img
                src={ASSETS.guideMockup}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/viral_master_guide_mockup_1793370554906.jpg';
                }}
                alt="Mockup 3D de la Guía Viral Master Pro"
                className="w-full h-auto object-cover max-h-[460px]"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />

              {/* Floating feature pills on image */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-emerald-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Manual 3D Interactivo</p>
                    <p className="text-[11px] text-zinc-400">Paso a paso para dominar el algoritmo</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-emerald-400 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-700">
                  Edición Digital Inmediata
                </span>
              </div>
            </div>

            {/* Glowing Accent Ring */}
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-3xl bg-zinc-800 opacity-20 blur-xl group-hover:opacity-35 transition duration-500 -z-10"
            />
          </div>

          {/* Smartphone Analytics Preview (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-4 shadow-xl">
              <div className="relative rounded-xl overflow-hidden mb-3">
                <img
                  src={ASSETS.phoneGrowth}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/smartphone_viral_growth_1793370555605.jpg';
                  }}
                  alt="Estadísticas de crecimiento viral en smartphone"
                  className="w-full h-56 sm:h-64 object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-zinc-900/90 backdrop-blur-md border border-zinc-700 px-2.5 py-1 rounded-md flex items-center gap-1.5 text-xs text-white font-semibold">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>+1,250% Alcance Viral</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-zinc-900/90 backdrop-blur-md border border-zinc-700 px-2.5 py-1 rounded-md flex items-center gap-1.5 text-xs text-emerald-300 font-bold tabular-nums">
                  <Eye className="w-3.5 h-3.5" />
                  <span>3.8M Visualizaciones</span>
                </div>
              </div>

              {/* Instant benefits highlight */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-zinc-900 border border-zinc-800">
                  <span className="text-zinc-300 font-medium">Ganchos magnéticos comprobados</span>
                  <span className="text-emerald-400 font-semibold font-mono">3 segundos</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-zinc-900 border border-zinc-800">
                  <span className="text-zinc-300 font-medium">Retención promedio del espectador</span>
                  <span className="text-emerald-400 font-semibold font-mono">82% - 94%</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-zinc-900 border border-zinc-800">
                  <span className="text-zinc-300 font-medium">Configuración anti-shadowban</span>
                  <span className="text-emerald-400 font-semibold font-mono">100% Blindado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
