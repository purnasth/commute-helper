import error from '../../assets/vector/passenger.svg';

const SearchingRide = () => {
  return (
    <>
      <main className="relative flex size-full flex-col items-center justify-center overflow-hidden bg-white dark:bg-dark p-5 shadow-lg">
        <img
          src={error}
          alt="Error 404"
          className="-mt-12 h-auto w-96 animate-floating-up select-none object-contain md:h-[60vh] md:w-auto"
          draggable="false"
        />
        <p className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 text-center font-light">
          Please wait while we search for available rides.
          <svg
            className="size-6 animate-spin text-teal-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </p>
      </main>
    </>
  );
};

export default SearchingRide;
