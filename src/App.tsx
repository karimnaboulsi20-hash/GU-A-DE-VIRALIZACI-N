/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CurrencyCode } from './types';
import { TopUrgencyBanner } from './components/TopUrgencyBanner';
import { HeroSection } from './components/HeroSection';
import { VisualBenefits } from './components/VisualBenefits';
import { InteractiveHookSimulator } from './components/InteractiveHookSimulator';
import { SocialProofStrip } from './components/SocialProofStrip';
import { OfferStackSection } from './components/OfferStackSection';
import { FaqSection } from './components/FaqSection';
import { FooterSection } from './components/FooterSection';
import { DeclineConfirmModal } from './components/DeclineConfirmModal';

export default function App() {
  const [currency] = useState<CurrencyCode>('USD');
  const [timeLeft, setTimeLeft] = useState<number>(600); // 10 minutes
  const [showDeclineModal, setShowDeclineModal] = useState<boolean>(false);

  // Live countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const handleDeclineUpsell = () => {
    setShowDeclineModal(true);
  };

  const [declineConfirmed, setDeclineConfirmed] = useState<boolean>(false);

  const handleConfirmDecline = () => {
    setShowDeclineModal(false);
    setDeclineConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-[#06080F] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black bg-grid-pattern">
      {/* 1. Urgency Bar & Progress Top Bar */}
      <TopUrgencyBanner timeLeftSeconds={timeLeft} />

      {/* Main Content Funnel */}
      <main className="flex-1">
        {/* 2. Hero Section with Headline, 3D Guide Mockup & Problem Statement */}
        <HeroSection />

        {/* 3. Three Visual Benefits (Más visualizaciones, Crecimiento más rápido, Estrategias de viralización) */}
        <VisualBenefits />

        {/* 4. Interactive Hook Simulator (Proof of why content alone is not enough) */}
        <InteractiveHookSimulator />

        {/* 5. Social Proof and Quantitative Impact Strip */}
        <SocialProofStrip />

        {/* 6. Official Upsell Offer Stack with Pricing, Checkout Button & Discrete Decline */}
        <OfferStackSection
          currency={currency}
          onDeclineUpsell={handleDeclineUpsell}
        />

        {/* 7. FAQ Accordion */}
        <FaqSection />

        {declineConfirmed && (
          <div className="fixed bottom-4 left-4 right-4 max-w-lg mx-auto z-40 p-4 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl flex items-center justify-between gap-3 text-xs sm:text-sm text-slate-200">
            <span>Tu pedido continuará únicamente con el Pack Viral Master básico. Acceso enviado a tu correo.</span>
            <button
              onClick={() => setDeclineConfirmed(false)}
              className="text-xs px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white font-medium shrink-0 cursor-pointer"
            >
              Entendido
            </button>
          </div>
        )}
      </main>

      {/* 8. Clean Trust & Disclaimer Footer */}
      <FooterSection />

      {/* Modals */}
      <DeclineConfirmModal
        isOpen={showDeclineModal}
        onClose={() => setShowDeclineModal(false)}
        onConfirmDecline={handleConfirmDecline}
        currency={currency}
      />
    </div>
  );
}
