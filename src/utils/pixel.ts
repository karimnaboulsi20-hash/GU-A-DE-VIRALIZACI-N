export const FACEBOOK_PIXEL_ID = '1909582240014767';
export const FACEBOOK_ACCESS_TOKEN = 'EAAXhiY72ZBSoBSZCn7DybTR9bIJBmkGRwAxNtgxN6ctb3zZCB2M42TICHUa1QcD4QSGfpUFjvsvSoZAzaEZCValID7W8OVcShPCMpSk9ktFGEcpXZBuSOmUHZD1fPYTFIYWxqUWmfYjZAaALOPjQKvy6sZCDLRQfFyZALmDmSd8YiZBqMNaXVoX9xHcGDcZBl5ZB9SQZDZD';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export function trackPixelEvent(eventName: string, data?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, data);
  }
}
