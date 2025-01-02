import React from 'react';
import CareOurEarth from './CareOurEarth';

interface TitleProps {
  title: string;
  description?: string;
}

const Title: React.FC<TitleProps> = ({ title, description }) => {
  return (
    <>
      <div className="container flex size-full max-w-4xl flex-col items-center justify-center gap-4 text-center">
        <CareOurEarth />

        <h1 className="mt-4 text-5xl font-bold capitalize leading-snug">
          {title}
        </h1>

        <p className="max-w-2xl font-body">{description}</p>
      </div>
    </>
  );
};

export default Title;
