import { Link } from 'react-router-dom';
import error from '../assets/vector/no-rides.svg';

const Error404 = () => {
  return (
    <>
      <main className="flex h-[calc(100vh-5.5rem)] flex-col items-center justify-center p-0">
        <img
          src={error}
          alt="Error 404"
          className="h-auto w-96 animate-floating select-none object-contain md:h-[60vh] md:w-auto -mt-12"
          draggable="false"
        />
        <h1 className="pointer-events-none absolute inset-0 -translate-y-12 flex size-full select-none items-center justify-center text-8xl font-bold uppercase tracking-wider text-teal-950 mix-blend-difference">
          No rides found
        </h1>
        <Link
          to="/"
          className="mt-5 rounded-full bg-teal-300 px-6 py-2 font-semibold"
        >
          Go Home
        </Link>
      </main>
    </>
  );
};

export default Error404;
