const fontWeights = [
  { label: 'light', weight: 300 },
  { label: 'regular', weight: 400 },
  { label: 'medium', weight: 500 },
  //   { label: 'semibold', weight: 600 },
  { label: 'bold', weight: 700 },
  //   { label: 'extraBold', weight: 800 },
  //   { label: 'black', weight: 900 },
];

const fontName = 'Bricolage Grotesque';

const letters = [
  {
    label: 'Uppercase',
    value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  },
  {
    label: 'Lowercase',
    value: 'abcdefghijklmnopqrstuvwxyz',
  },
  {
    label: 'Numbers & Symbols',
    value: '1234567890(,.;:?!$&*)',
  },
];

const fontScale = [
  {
    label: '8xl',
    className: 'text-8xl font-bold leading-none',
    px: 96,
    rem: 6,
    lineHeight: 1,
    fontWeight: 'bold',
  },
  {
    label: '6xl',
    className: 'text-6xl font-bold leading-none',
    px: 60,
    rem: 3.75,
    lineHeight: 1,
    fontWeight: 'bold',
  },
  {
    label: '3xl',
    className: 'text-3xl font-semibold leading-[1.2]',
    px: 30,
    rem: 1.875,
    lineHeight: 1.2,
    fontWeight: 'semibold',
  },
  {
    label: '2xl',
    className: 'text-2xl font-medium leading-[1.33]',
    px: 24,
    rem: 1.5,
    lineHeight: 1.33,
    fontWeight: 'medium',
  },
  {
    label: 'xl',
    className: 'text-xl font-normal leading-[1.4]',
    px: 20,
    rem: 1.25,
    lineHeight: 1.4,
    fontWeight: 'normal',
  },
  {
    label: 'base',
    className: 'text-base font-light leading-[1.5]',
    px: 16,
    rem: 1,
    lineHeight: 1.5,
    fontWeight: 'light',
  },
];

const FontBrand = () => {
  return (
    <section id="font" className="space-y-16 py-20">
      <div>
        <p className="text-sm">
          The typography used in Commuto is a blend of historical sources,
          technical decisions, and personal feelings. Commuto uses{' '}
          <a
            href="https://ateliertriay.github.io/bricolage/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal-600 hover:underline"
          >
            {fontName}
          </a>{' '}
          by{' '}
          <a
            href="https://www.mathieutriay.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal-600 hover:underline"
          >
            Mathieu Triay
          </a>{' '}
          as the primary typeface for its brand. This is the only font that is
          used throughout the entire brand identity, including the website,
          marketing materials, and other communications.
        </p>
      </div>
      <div className="space-y-8 divide-y dark:divide-y-[0.5px]">
        <h2 className="mb-6 text-base font-medium">{fontName}</h2>
        {fontWeights.map(({ label, weight }) => (
          <div key={weight} className="grid grid-cols-7 items-center pt-8">
            <p className={`col-span-1 text-6xl font-${label}`}>Aa</p>
            <div className="col-span-3 space-y-2">
              <span className={`block text-xs capitalize font-${label}`}>
                {label} {weight}
              </span>
              <h3 className={`text-lg font-${label} capitalize`}>
                {fontName} {label}
              </h3>
            </div>
            <div className="col-span-3 space-y-1">
              {letters.map(({ label: letterLabel, value }) => (
                <p key={letterLabel} className={`font-${label}`}>
                  {value}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Font Scale Section */}
      <div className="mt-16 space-y-3 divide-y">
        <h3 className="mb-6 text-base font-medium">The Font Scale</h3>
        {fontScale.map(
          ({ label, className, px, rem, lineHeight, fontWeight }) => (
            <div key={label} className="flex flex-col py-2">
              <span className={className}>Commuto</span>
              <div className="text-xxs space-x-2">
                <span>
                  {px}px ({rem} rem)
                </span>
                <span>line-height: {lineHeight}</span>
                <span>font-weight: {fontWeight}</span>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default FontBrand;
