import { usePWA } from '../../hooks/usePWA';
import logo from '../../assets/logo.svg';

export const PWAInstallButton = () => {
  const { installPrompt, isAppInstalled, installApp } = usePWA();

  if (isAppInstalled || !installPrompt) return null;

  return (
    <div className="flex w-fit items-center justify-start gap-1.5 rounded-full border border-teal-50 bg-teal-50 p-1 text-dark shadow dark:border-teal-600 dark:bg-teal-300">
      <button
        type="button"
        onClick={installApp}
        className="transition-150 group flex items-center gap-2 rounded-full bg-teal-950 py-3 pl-4 pr-5 text-xs text-white shadow-lg hover:bg-teal-700 sm:text-sm"
      >
        <img
          src={logo}
          alt="Logo"
          className="group-hover:filter-white transition-150 size-4 scale-125 object-contain sm:size-5 sm:scale-110"
        />
        Install App
      </button>
      <p className="max-w-xs flex-1 text-xs font-extralight">
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
