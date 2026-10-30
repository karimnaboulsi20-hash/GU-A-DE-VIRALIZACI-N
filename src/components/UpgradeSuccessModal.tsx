import React from 'react';
import { CheckCircle2, Download, ExternalLink, Sparkles, X, ShieldCheck } from 'lucide-react';
import { CurrencyCode } from '../types';
import { CURRENCY_RATES, formatCurrencyPrice } from '../utils/pricing';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currency: CurrencyCode;
}

export const UpgradeSuccessModal: React.FC<Props> = ({ isOpen, onClose, currency }) => {
  if (!isOpen) return null;

  const currentPricing = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
  const basePrice = Math.round(currentPricing.regularPrice * 0.4);
  const totalPaid = basePrice + currentPricing.offerPrice;

  const [isDownloaded, setIsDownloaded] = React.useState(false);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
    >
      <div className="relative w-full max-w-lg rounded-3xl border-2 border-cyan-400 bg-gradient-to-b from-[#09112A] via-[#070C1E] to-[#04060E] p-6 sm:p-8 shadow-2xl text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white bg-slate-900 border border-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Success Icon */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 mb-4 shadow-lg shadow-cyan-500/30">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-1 block">
          ¡Orden Completada al 100%!
        </span>
        <h3 id="success-modal-title" className="font-heading text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight mb-3">
          ¡Felicidades! Has Añadido Viral Master Pro
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          Tu pedido ha sido actualizado con éxito. El acceso a los miles de videos y a la Guía Maestra con todos los bonus ya está disponible.
        </p>

        {/* Updated Receipt Box */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-left mb-6 space-y-2 text-xs">
          <div className="flex justify-between items-center text-slate-300">
            <span>Pack Viral Master (Miles de Videos)</span>
            <span className="font-mono">{formatCurrencyPrice(basePrice, currency)}</span>
          </div>
          <div className="flex justify-between items-center text-cyan-300 font-medium">
            <span>Guía Viral Master Pro + 3 Bonus (Upsell)</span>
            <span className="font-mono">{formatCurrencyPrice(currentPricing.offerPrice, currency)}</span>
          </div>
          <div className="pt-2 border-t border-slate-800 flex justify-between items-center font-bold text-white text-sm">
            <span>Total Final Facturado:</span>
            <span className="font-mono text-cyan-400">{formatCurrencyPrice(totalPaid, currency)}</span>
          </div>
        </div>

        {/* Access CTAs */}
        <div className="space-y-3">
          <button
            onClick={() => setIsDownloaded(true)}
            className="w-full py-3.5 px-6 rounded-xl font-heading font-extrabold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>
              {isDownloaded ? '✓ DESCARGA INICIADA (ARCHIVOS LISTOS)' : 'DESCARGAR GUÍA MAESTRA Y BONUS AHORA'}
            </span>
          </button>

          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
          >
            Cerrar y ver detalles de compra
          </button>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-center gap-2 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>Garantía de 30 días activa · Soporte 24/7</span>
        </div>
      </div>
    </div>
  );
};
