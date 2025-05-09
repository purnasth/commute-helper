// import error from '../assets/vector/no-rides.svg';
import error from '../assets/vector/bhaiya-ji.svg';
import { MdOutlineError } from 'react-icons/md';
import StickyNavbar from '../layouts/StickyNavbar';

const Error404 = () => {
  return (
    <>
      <main className="flex h-auto min-h-[calc(100vh-1.5rem)] flex-col items-center justify-center p-0 lg:min-h-[calc(100vh-5.5rem)]">
        <div className="container mb-12 flex size-full max-w-4xl flex-col items-center justify-center gap-2 text-center md:mb-24">
          <span className="inline-flex items-center justify-center gap-1 rounded-full bg-teal-100 px-4 py-1 pr-2 text-xs font-semibold text-teal-700 shadow-sm outline outline-1 outline-teal-600/50 sm:text-sm md:text-base">
            Page Not Found
            <MdOutlineError className="text-lg text-teal-700" />
          </span>
          <h1 className="mt-4 text-2xl font-bold capitalize leading-snug md:text-4xl md:leading-snug lg:text-4xl lg:leading-snug">
            Lost? We've Got the Route to Get You Home!
          </h1>
          <p className="max-w-2xl text-xs font-normal text-shadow-light dark:text-shadow-dark sm:text-sm md:text-base">
            We couldn't find the page you were looking for, but don't
            worry—we're great at helping people find their way to their
            destination. Whether it's to home, work, or a greener future, we'll
            get you back on track.
          </p>
          <img
            src={error}
            alt="Error 404"
            className="left-1/2 top-1/2 -z-10 h-[60vh] object-contain md:absolute md:-mt-4 md:h-[85vh] md:-translate-x-1/2 md:-translate-y-1/2 md:opacity-30 md:dark:opacity-20"
            draggable="false"
          />
        </div>
      </main>

      <StickyNavbar />
    </>
  );
};

export default Error404;
