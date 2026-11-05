import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, Gift, Lock, Clock } from 'lucide-react';
import { BONUSES } from '../data/upsellContent';
import { CurrencyCode } from '../types';
import {
  CURRENCY_RATES,
  calculateDiscountPercent,
  calculateSavings,
  HOTMART_CHECKOUT_URL,
} from '../utils/pricing';
import { trackPixelEvent } from '../utils/pixel';

interface Props {
  currency: CurrencyCode;
  onDeclineUpsell: () => void;
}

export const OfferStackSection: React.FC<Props> = ({
  currency,
  onDeclineUpsell,
}) => {
  const currentPricing = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
  const discountPercent = calculateDiscountPercent(
    currentPricing.regularPrice,
    currentPricing.offerPrice
  );
  const savingsAmount = calculateSavings(
    currentPricing.regularPrice,
    currentPricing.offerPrice
  );

  return (
    <section id="oferta" className="py-12 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Main Offer Card Container */}
        <div className="relative rounded-3xl border-2 border-zinc-700 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-6 sm:p-10 shadow-2xl shadow-zinc-950/80">
          {/* Top Banner Ribbon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="px-5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-600 text-zinc-950 font-heading font-black text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-emerald-500/40 whitespace-nowrap">
              OFERTA EXCLUSIVA DE ESTA PÁGINA · {discountPercent}% OFF
            </span>
          </div>

          {/* Offer Title & Summary */}
          <div className="text-center mt-3 mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              Añade El <span className="text-emerald-400">Manual Secreto: Viral Master Pro</span> A Tu Pedido
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto mt-2">
              El complemento indispensable para que los miles de videos de tu pack exploten en visualizaciones, seguidores y monetización.
            </p>
          </div>

          {/* What's Inside - Value Stack */}
          <div className="space-y-4 mb-8">
            {/* Core Item */}
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-zinc-800 text-emerald-400 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm sm:text-base">
                    Guía Maestra 3D: El Método Definitivo de Viralización
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Algoritmo de TikTok, Instagram Reels y YouTube Shorts decodificado paso a paso.
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-400 shrink-0 font-mono">
                Valor: $67 USD
              </span>
            </div>

            {/* Bonuses */}
            {BONUSES.map((bonus, index) => (
              <div
                key={bonus.id}
                className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-start justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-zinc-800 text-zinc-300 shrink-0 mt-0.5">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-700">
                        Bonus #{index + 1}
                      </span>
                      <h4 className="font-heading font-bold text-white text-sm">
                        {bonus.title}
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-400 mt-0.5">{bonus.description}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-zinc-400 shrink-0 font-mono">
                  Valor: ${bonus.value} USD
                </span>
              </div>
            ))}
          </div>

          {/* Pricing Box */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 text-center mb-8">
            <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-zinc-400 mb-2">
              <span>Valor Total Real: <del className="text-zinc-600">$164 USD</del></span>
              <span aria-hidden="true">·</span>
              <span>Precio Normal: <del className="text-zinc-600">{currentPricing.symbol}{currentPricing.regularPrice}</del></span>
            </div>

            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400">
                Solo Hoy:
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-emerald-400 font-mono tabular-nums">
                {currentPricing.symbol}{currentPricing.offerPrice}
              </span>
              <span className="text-xs text-zinc-400 font-medium">
                {currentPricing.code} / Pago Único
              </span>
            </div>

            <div className="mt-3 py-2 px-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 inline-block">
              <p className="text-xs sm:text-sm font-bold text-emerald-400">
                Solo pagas el resto del valor si tienes resultados. Si no tienes resultados, ¡no pagas absolutamente nada más!
              </p>
            </div>
          </div>

          {/* Checkout CTA & Decline Button */}
          <div className="space-y-4">
            {/* Primary Action Button - Verde Bombardiano CTA */}
            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackPixelEvent('InitiateCheckout', { value: currentPricing.offerPrice, currency: currentPricing.code })}
              className="w-full py-5 px-6 rounded-2xl font-heading font-black text-base sm:text-xl text-zinc-950 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 hover:from-emerald-300 hover:to-green-400 shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-400/70 transition-all duration-200 transform active:scale-[0.99] flex items-center justify-center gap-3 cursor-pointer text-center"
            >
              <Zap className="w-6 h-6 fill-zinc-950 shrink-0" />
              <span className="tracking-wide">
                ¡SÍ, QUIERO VIRALIZAR MÁS RÁPIDO! — SOLO {currentPricing.symbol}{currentPricing.offerPrice}
              </span>
              <ArrowRight className="w-6 h-6 shrink-0" />
            </a>

            {/* Micro reassurance badges below button */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] sm:text-xs text-zinc-400 pt-1">
              <span className="inline-flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                Cobro automático a tu tarjeta / método actual
              </span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                Entrega instantánea en tu correo
              </span>
            </div>

            {/* Discrete Decline Option */}
            <div className="pt-4 text-center">
              <button
                onClick={onDeclineUpsell}
                className="text-xs text-zinc-500 hover:text-zinc-400 underline decoration-zinc-700 hover:decoration-zinc-400 transition-colors py-2 px-4 cursor-pointer"
              >
                No, gracias. Prefiero intentar viralizar por mi cuenta y arriesgarme a que mis videos no tengan vistas.
              </button>
            </div>
          </div>

          {/* Guarantee Seal Box */}
          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
            <div className="p-3 rounded-full bg-zinc-800 border border-zinc-700 text-emerald-400 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h5 className="font-heading font-bold text-white text-sm">
                Garantía Incondicional Blindada de 30 Días
              </h5>
              <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                Prueba el método completo con tu Pack Viral Master. Si en 30 días no logras disparar tus visualizaciones, simplemente envíanos un correo y te reembolsaremos el 100% de esta actualización al instante. Sin preguntas ni complicaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
