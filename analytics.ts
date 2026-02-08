const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

const ensureDataLayer = () => {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  return window.dataLayer;
};

const ensureGtag = () => {
  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => {
      ensureDataLayer().push(args);
    };
  }
  return window.gtag;
};

const injectScript = () => {
  if (!measurementId) return;
  const selector = `script[data-ga-id="${measurementId}"]`;
  if (document.querySelector(selector)) return;

  const script = document.createElement('script');
  script.async = true;
  script.dataset.gaId = measurementId;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
};

export const initializeAnalytics = () => {
  if (!measurementId || typeof window === 'undefined') {
    return;
  }

  injectScript();

  const gtag = ensureGtag();
  gtag('js', new Date());
  gtag('config', measurementId, {
    send_page_view: false,
  });
};
