import banner from '../assets/mockups/banner.png';
import Title from './ui/Title';

const Intro = () => {
  return (
    <>
      <main className="relative">
        <Title
          title="Connecting Co-workers & Students sharing the same route"
          description="We are a community of professionals and students who share the same
            route to work or school. We help you find a ride or a passenger to
            share resources, reduce your carbon footprint and step towards a
            more sustainable future."
        />

        <div className="flex items-center gap-20">
          <div className="flex-1 flex-col space-y-5">
            <h2 className="max-w-sm text-3xl leading-snug">
              Share The Road. <br /> Share The Memories.
            </h2>
            <p className="max-w-md">
              We empower you to find a ride or a passenger to share resources,
              reduce your carbon footprint and step towards a more sustainable
              future.
            </p>
            <h3 className="pt-10 text-6xl text-teal-400">Ride. Enjoy. Save.</h3>
          </div>
          <div className="relative flex flex-1 justify-center">
            <img
              src={banner}
              alt="Commute Helper"
              draggable="false"
              className="filter-primary absolute inset-0 -z-10 scale-100 opacity-40 mix-blend-multiply"
            />
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
