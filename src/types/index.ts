export type CurrencyCode = 'USD' | 'EUR' | 'MXN' | 'COP';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  regularPrice: number;
  offerPrice: number;
  rate: number;
}

export interface BenefitItem {
  id: string;
  title: string;
  subtitle: string;
  metric: string;
  metricLabel: string;
  description: string;
  iconType: 'views' | 'speed' | 'strategy';
  badge: string;
}

export interface BonusItem {
  id: string;
  title: string;
  value: number;
  description: string;
  tag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
