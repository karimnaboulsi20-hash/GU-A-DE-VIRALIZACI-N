import React from 'react';
import { Lock, ShieldCheck } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-[#03050A] border-t border-slate-900 py-10 px-4 text-center">
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Wordmark */}
        <div className="flex items-center justify-center gap-2">
          <span className="font-heading font-black text-lg text-white tracking-tight">
            <span className="text-cyan-400">VIRAL</span>MASTER
          </span>
          <span className="text-xs text-slate-500">· Actualización Oficial</span>
        </div>

        {/* Quiet Trust Line */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1 text-slate-400">
            <Lock className="w-3.5 h-3.5 text-cyan-500" />
            Pagos 100% Cifrados con SSL
          </span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
            Garantía de Satisfacción Total
          </span>
        </div>

        {/* Disclaimer */}
        <p className="text-[11px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Descargo de responsabilidad: Este sitio web no forma parte de TikTok, Meta (Facebook / Instagram) ni YouTube / Google LLC. Tampoco está respaldado por estas plataformas en ninguna forma. Los resultados pueden variar según el nicho y la constancia de cada creador.
        </p>

        <p className="text-[11px] text-slate-600">
          © {new Date().getFullYear()} Pack Viral Master™. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
