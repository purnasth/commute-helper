import React, { useState } from 'react';

type ColorGroup = {
  label: string;
  classes: string[];
};

type Font = {
  label: string;
};

const colors: ColorGroup[] = [
  {
    label: 'Primary Color Palette',
    classes: [
      'bg-teal-50',
      'bg-teal-100',
      'bg-teal-200',
      'bg-teal-300',
      'bg-teal-400',
      'bg-teal-500',
      'bg-teal-600',
      'bg-teal-700',
      'bg-teal-800',
      'bg-teal-900',
      'bg-teal-950',
    ],
  },
];

const fonts: Font[] = [
  {
    label: 'Bricolage Grotesque',
  },
];

const tailwindColorToHexRgb: Record<string, string> = {
  'bg-teal-50': '#f0fdfa',
  'bg-teal-100': '#ccfbf1',
  'bg-teal-200': '#99f6e4',
  'bg-teal-300': '#5eead4',
  'bg-teal-400': '#2dd4bf',
  'bg-teal-500': '#14b8a6',
  'bg-teal-600': '#0d9488',
  'bg-teal-700': '#0f766e',
  'bg-teal-800': '#115e59',
  'bg-teal-900': '#134e4a',
  'bg-teal-950': '#042f2e',
};

const hexToRgba = (hex: string, opacity: number): string => {
  const [r, g, b] = hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const Brand: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string>('');
  const [bgColor, setBgColor] = useState<string>('');

  const copyToClipboard = (text: string, colorClass: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(`Copied: ${text}`);
      setBgColor(colorClass);
      setTimeout(() => {
        setCopiedText('');
        setBgColor('');
      }, 3000);
    });
  };

  return (
    <>
      {copiedText && (
        <div
          className={`fixed bottom-4 left-1/2 -translate-x-1/2 transform rounded-md px-4 py-2 ${bgColor}`}
        >
          <span className="text-white mix-blend-difference">{copiedText}</span>
        </div>
      )}
      <main className="container space-y-32">
        <div className="flex flex-wrap items-center gap-16">
          {colors.map((colorGroup, index) => (
            <div key={index} className="min-w-[150px]">
              <label className="mb-5 block text-center text-lg font-semibold">
                {colorGroup.label}
              </label>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {colorGroup.classes.map((colorClass, idx) => {
                  const hex = tailwindColorToHexRgb[colorClass];
                  const rgba = hexToRgba(hex, 1);
                  return (
                    <div key={idx} className="flex flex-col items-center">
                      <span
                        className={`size-32 ${colorClass} inline-block cursor-pointer border border-gray-200`}
                        onClick={() =>
                          copyToClipboard(colorClass.split('-')[1], colorClass)
                        }
                      ></span>
                      <span
                        className="mt-1 cursor-pointer text-xs"
                        onClick={() => copyToClipboard(hex, colorClass)}
                      >
                        {hex}
                      </span>
                      <span
                        className="cursor-pointer text-xs"
                        onClick={() => copyToClipboard(rgba, colorClass)}
                      >
                        {rgba}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div>
          {/* <h2 className="mb-8 text-7xl">Fonts</h2> */}
          <div className="flex flex-wrap items-start gap-16 text-left">
            {fonts.map((font, index) => (
              <div key={index}>
                <h3 className={`mb-8 text-5xl underline`}>{font.label}</h3>
                <p
                  className={`text-5xl font-normal leading-snug tracking-widest`}
                >
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  <br />
                  abcdefghijklmnopqrstuvwxyz
                  <br />
                  1234567890
                  <br />
                  !@#$%^&*()
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Brand;
