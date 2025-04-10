import { useEffect } from 'react';

export const useRealAccessibility = (): void => {
  useEffect(() => {
    (window as any).realaccessibilityConfig = {
      position: 'bottom-right', // precisa manter pra ativar, mesmo que depois sobrescreva com CSS
    };

    const script = document.createElement('script');
    script.src = 'https://plugin.realaccessibility.com.br/realaccessibility.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};
