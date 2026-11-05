import React from 'react';
import { ArrowRight, X, ShieldAlert } from 'lucide-react';
import { CurrencyCode } from '../types';
import { CURRENCY_RATES, HOTMART_CHECKOUT_URL } from '../utils/pricing';
import { trackPixelEvent } from '../utils/pixel';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirmDecline: () => void;
  currency: CurrencyCode;
}

export const DeclineConfirmModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onConfirmDecline,
  currency,
}) => {
  if (!isOpen) return null;

  const currentPricing = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="decline-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
    >
      <div className="relative w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl text-center">
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 p-2 rounded-full text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-700 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Warning Icon */}
        <div className="mx-auto w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400 mb-3">
          <ShieldAlert className="w-7 h-7" />
        </div>

        <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 mb-1 block">
          ¿Estás seguro de dejar pasar esto?
        </span>
        <h3 id="decline-modal-title" className="font-heading text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-2">
          Esta oferta no volverá a aparecer
        </h3>
        <p className="text-xs text-zinc-300 leading-relaxed mb-6">
          Si sales de esta página, el precio de la <strong>Guía Viral Master Pro</strong> volverá a su valor habitual de <strong>${currentPricing.regularPrice} USD</strong>. No podrás añadirla por solo <strong>{currentPricing.symbol}{currentPricing.offerPrice}</strong> más adelante.
        </p>

        <div className="space-y-3">
          <a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackPixelEvent('InitiateCheckout', { value: currentPricing.offerPrice, currency: currentPricing.code });
              onClose();
            }}
            className="w-full py-3.5 px-5 rounded-xl font-heading font-black text-xs sm:text-sm text-zinc-950 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 hover:from-emerald-300 hover:to-green-400 shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
          >
            <span>SÍ, QUIERO VIRALIZAR MÁS RÁPIDO POR SOLO {currentPricing.symbol}{currentPricing.offerPrice}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onConfirmDecline}
            className="w-full py-2.5 px-4 rounded-xl text-xs text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
          >
            Entiendo el riesgo, continuar solo con el pack básico
          </button>
        </div>
      </div>
    </div>
  );
};
