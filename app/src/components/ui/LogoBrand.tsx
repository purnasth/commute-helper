import commutoLogo from '../../assets/logo/commuto.svg';
import commutoLogoAlt from '../../assets/logo/commuto-alt.svg';
import commutoIcon from '../../assets/logo/commuto-icon.svg';
import commutoIconAlt from '../../assets/logo/commuto-icon-alt.svg';
import { useState } from 'react';

const LogoBrand = () => {
  const [toggleLogo, setToggleLogo] = useState(true);
  const [toggleIcon, setToggleIcon] = useState(true);

  return (
    <section id="logo" className="space-y-16 pb-20">
      <div className="space-y-10">
        <p className="text-sm">
          The logo is thoughtfully designed by{' '}
          <a
            href="https://purnashrestha.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal-600 hover:underline"
          >
            Purna Shrestha
          </a>{' '}
          on December 2024. It embodies a modern and minimalist aesthetic,
          reflecting the core values and identity of our brand. Consistent
          application of the logo across all platforms and materials is
          essential to ensure strong and cohesive brand recognition.
        </p>
        <div
          className={`relative flex h-96 w-full items-center justify-center rounded-tr-[2rem] ${toggleLogo ? 'bg-light' : 'bg-dark'} transition-all duration-100`}
        >
          <button
            type="button"
            aria-label="Toggle Logo"
            className={`absolute right-3.5 top-3.5 size-10 rounded-full bg-dark ${!toggleLogo ? 'bg-light' : 'bg-dark'}`}
            onClick={() => setToggleLogo((prev) => !prev)}
            aria-pressed={toggleLogo}
          ></button>
          <img
            src={toggleLogo ? commutoLogoAlt : commutoLogo}
            alt={toggleLogo ? 'Commuto Logo Alt' : 'Commuto Logo'}
            className="h-auto max-w-full"
          />
        </div>
      </div>
      <div className="space-y-10">
        <p className="text-sm">
          Commuto Smiley is used as the app icon for mobile and desktop
          applications. It is designed to be simple, recognizable, and
          versatile, ensuring that it stands out in various contexts while
          maintaining brand consistency.
        </p>
        <div
          className={`relative flex h-96 w-full items-center justify-center rounded-tr-[2rem] bg-[radial-gradient(circle,_#2dd4bf_10%,_transparent_10%),_radial-gradient(circle,_#ffffff00_0%,_transparent_10%)] bg-[length:15px_15px] bg-[position:0_0,10px_10px] px-0 py-0 ${toggleIcon ? 'bg-light' : 'bg-teal-900'} transition-all duration-100`}
        >
          <button
            type="button"
            aria-label="Toggle Icon"
            className={`absolute right-3.5 top-3.5 size-10 rounded-full bg-dark ${!toggleIcon ? 'bg-light' : 'bg-dark'}`}
            onClick={() => setToggleIcon((prev) => !prev)}
            aria-pressed={toggleIcon}
          ></button>
          <img
            src={toggleIcon ? commutoIconAlt : commutoIcon}
            alt={toggleIcon ? 'Commuto Icon Alt' : 'Commuto Icon'}
            className="h-auto max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default LogoBrand;
