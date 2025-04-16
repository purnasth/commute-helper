import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => void;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const usePWA = () => {
  const [installPrompt, setInstallPrompt] = useState<Event | null>(null);
  const [isAppInstalled, setIsAppInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsAppInstalled(true);
    }

    window.addEventListener('appinstalled', () => {
      setIsAppInstalled(true);
    });

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt,
      );
      };
    }, [installPrompt]);

  const installApp = async (): Promise<boolean> => {
    if (!installPrompt) return false;

    const deferredPrompt = installPrompt as BeforeInstallPromptEvent;
    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;
    setInstallPrompt(null);

    return outcome === 'accepted';
  };

  return { installPrompt, isAppInstalled, installApp };
};
