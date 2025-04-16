import { usePWA } from '../../hooks/usePWA';
import logo from '../../assets/logo.svg';

export const PWAInstallButton = () => {
  const { installPrompt, isAppInstalled, installApp } = usePWA();

  if (isAppInstalled || !installPrompt) return null;

  return (
    <div className="flex w-fit items-center justify-start gap-1.5 rounded-full border border-teal-50 bg-teal-50 p-1 shadow">
      <button
        type="button"
        onClick={installApp}
        className="transition-150 group flex items-center gap-2 rounded-full bg-teal-950 px-5 py-3 text-sm text-white shadow-lg hover:bg-teal-700"
      >
        <img
          src={logo}
          alt="Logo"
          className="group-hover:filter-white transition-150 size-5 object-contain"
        />
        Install App
      </button>
      <p className="max-w-xs text-xs font-extralight">
        Install our Progressive Web App (PWA) for quick access and a seamless
        experience.
        {/* Install our Progressive Web App (PWA) for quick access and a
              seamless experience. Unlike traditional apps, PWAs work directly
              from your browser, offering offline support and faster performance
              without needing to visit an app store. */}
      </p>
    </div>
  );
};
