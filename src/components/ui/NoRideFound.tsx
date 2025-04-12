import error from '../../assets/vector/no-rides.svg';

const NoRideFound = () => {
  return (
    <>
      <main className="relative flex w-full max-w-xl flex-col items-center justify-center overflow-hidden rounded-3xl bg-white p-5 shadow-lg">
        <img
          src={error}
          alt="Error 404"
          className="-mt-12 h-auto w-96 animate-floating select-none object-contain md:h-[60vh] md:w-auto"
          draggable="false"
        />
        <h2 className="pointer-events-none absolute inset-0 flex size-full -translate-y-12 select-none items-center justify-center text-center text-8xl font-bold uppercase tracking-wider text-teal-950 mix-blend-difference">
          No rides found
        </h2>
        <p className="font-light">
          No Rides Found!! Try searching for a different ride
        </p>
      </main>
    </>
  );
};

export default NoRideFound;
