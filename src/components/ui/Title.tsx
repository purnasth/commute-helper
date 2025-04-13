import React from 'react';
import CareOurEarth from './CareOurEarth';

interface TitleProps {
  title: string;
  description?: string;
}

const Title: React.FC<TitleProps> = ({ title, description }) => {
  return (
    <>
      <div className="container mb-12 flex size-full max-w-4xl flex-col items-center justify-center gap-4 text-center md:mb-24">
        <CareOurEarth />

        <h1 className="mt-4 text-2xl font-bold capitalize leading-snug md:text-4xl md:leading-snug lg:text-5xl lg:leading-snug">
          {title}
        </h1>

        <p className="max-w-2xl font-body text-xs sm:text-sm md:text-base">
          {description}
        </p>
      </div>
    </>
  );
};

export default Title;
