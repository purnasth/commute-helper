import banner from '../assets/mockups/banner.png';
import CareOurEarth from './ui/CareOurEarth';

const Intro = () => {
  return (
    <>
      <main className="relative">
        <div className="container flex size-full max-w-4xl flex-col items-center justify-center gap-4 text-center">
          <CareOurEarth />

          <h1 className="mt-4 text-5xl font-bold capitalize leading-snug">
            Connecting Co-workers & Students sharing the same route
          </h1>

          <p className="max-w-2xl font-body">
            We are a community of professionals and students who share the same
            route to work or school. We help you find a ride or a passenger to
            share resources, greenuce your carbon footprint and step towards a
            more sustainable future.
          </p>
        </div>

        <div className="mt-24 flex items-center gap-20">
          <div className="flex-1 flex-col space-y-5">
            <h2 className="max-w-sm text-3xl leading-snug">
              Share The Road. <br /> Share The Memories.
            </h2>
            <p className="max-w-md">
              We empower you to find a ride or a passenger to share resources,
              greenuce your carbon footprint and step towards a more sustainable
              future.
            </p>
            <h3 className="pt-10 text-6xl text-teal-400">Ride. Enjoy. Save.</h3>
          </div>
          <div className="flex flex-1 justify-center">
            <img src={banner} alt="Commute Helper" draggable="false" />
          </div>
          <div className="flex flex-1 flex-col items-end justify-end space-y-20">
            <h2 className="max-w-sm text-xl leading-snug">
              Our <strong className="text-teal-400">Vision</strong> is to live
              in a world where we all share resources to better preserve our
              economy and planet.
            </h2>
            <h2 className="max-w-sm text-xl leading-snug">
              Our <strong className="text-teal-400">Mission</strong> is to fill
              the empty seats in our ride and make our commute more affordable
              and sustainable.
            </h2>
          </div>
        </div>
      </main>
    </>
  );
};

export default Intro;
