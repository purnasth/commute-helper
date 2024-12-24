const Intro = () => {
  return (
    <>
      <main className="relative z-auto h-screen w-full bg-white/50">
        <div className="container flex size-full max-w-3xl flex-col items-center justify-center gap-4 text-center">
          <h1 className="mt-4 text-5xl capitalize leading-snug">
            Commute Helper
          </h1>

          <p className="max-w-3xl font-body">
            Commute Helper is a web application that helps you to find the best
            route to your destination. It uses the Google Maps API to provide
            you with the best possible route to your destination.
          </p>
        </div>
      </main>
    </>
  );
};

export default Intro;
