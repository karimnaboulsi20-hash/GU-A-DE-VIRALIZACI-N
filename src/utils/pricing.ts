import { CurrencyCode, CurrencyConfig } from '../types';

export const HOTMART_CHECKOUT_URL = 'https://pay.hotmart.com/M108263458P?bid=1793369722345';

export const CURRENCY_RATES: Record<CurrencyCode, CurrencyConfig> = {
  USD: {
    code: 'USD',
    symbol: '$',
    regularPrice: 67,
    offerPrice: 9,
    rate: 1,
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    regularPrice: 65,
    offerPrice: 16,
    rate: 0.94,
  },
  MXN: {
    code: 'MXN',
    symbol: 'MX$',
    regularPrice: 1190,
    offerPrice: 299,
    rate: 18.5,
  },
  COP: {
    code: 'COP',
    symbol: 'COL$',
    regularPrice: 280000,
    offerPrice: 69000,
    rate: 4200,
  },
};

export function calculateDiscountPercent(regularPrice: number, offerPrice: number): number {
  if (regularPrice <= 0 || offerPrice < 0) return 0;
  const discount = ((regularPrice - offerPrice) / regularPrice) * 100;
  return Math.round(discount);
}

export function calculateSavings(regularPrice: number, offerPrice: number): number {
  return Math.max(0, regularPrice - offerPrice);
}

export function formatCurrencyPrice(amount: number, currency: CurrencyCode): string {
  const config = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
  if (currency === 'COP' || currency === 'MXN') {
    return `${config.symbol} ${amount.toLocaleString('es-ES')}`;
  }
  return `${config.symbol}${amount}`;
}

export function calculateCombinedOrder(basePackPrice: number, upsellPrice: number) {
  return {
    basePackPrice,
    upsellPrice,
    totalPrice: basePackPrice + upsellPrice,
    regularTotal: basePackPrice + 67,
    totalSaved: 67 - upsellPrice,
  };
}
