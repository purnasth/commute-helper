import Title from './ui/Title';
import rideBuddy from '../assets/ride.webp';
import introVideo from '../assets/videos/demo.mp4';
import iPhoneMockup from '../assets/mockups/iPhone.webp';
import introPoster from '../assets/mockups/imagePoster.webp';
// import demoTrack from '../assets/tracks/demoTrack.vtt';

const Intro = () => {
  return (
    <main className="relative pb-0">
      <Title
        title="Connecting Co-workers & Students sharing the same route"
        description="We are a community of professionals and students who share the same
            route to work or school. We help you find a ride or a passenger to
            share resources, reduce your carbon footprint and step towards a
            more sustainable future."
      />

      <div className="flex flex-col items-center gap-10 md:gap-16 lg:flex-row lg:gap-20">
        <div className="order-2 flex-1 flex-col space-y-2 text-center md:space-y-5 lg:order-1 lg:text-left">
          <h2 className="mx-auto max-w-sm text-2xl leading-snug md:text-3xl lg:ml-0 lg:text-2xl xl:text-3xl xl:leading-snug">
            Share The Road. <br /> Share The Memories.
          </h2>
          <p className="max-w-md text-sm xl:text-base">
            We empower you to find a ride or a passenger to share resources,
            reduce your carbon footprint and step towards a more sustainable
            future.
          </p>
          <h3 className="bg-white/50 pt-4 text-4xl text-teal-400 md:pt-10 md:text-5xl xl:text-6xl">
            Ride. Enjoy. Save.
          </h3>
        </div>
        <div className="relative order-1 flex flex-1 justify-center lg:order-2">
          {/* <img
            src={iPhoneMockup}
            alt="Commute Connect"
            draggable="false"
            className="filter-primary absolute inset-0 -z-10 scale-100 animate-pulse opacity-60 mix-blend-multiply"
          /> */}
          <div className="-translate-y-8">
            <video
              playsInline
              webkit-playsinline="true"
              src={introVideo}
              autoPlay
              loop
              muted
              poster={introPoster}
              className="scale-[0.9] rounded-[2rem] object-cover"
            >
              <track
                // src={demoTrack}
                kind="captions"
                srcLang="en"
                label="English Captions"
                default
              />
            </video>
            <img
              src={iPhoneMockup}
              alt="Commute Connect"
              className="pointer-events-none absolute inset-0 translate-y-8"
              draggable="false"
              width={750}
              height={1514}
            />
          </div>
          <div className="absolute -top-[3px] h-1 w-4/5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <div className="glitter-effect absolute -top-3 -z-10 h-48 w-1/2 animate-custom-pulse rounded-full bg-teal-200 blur-2xl"></div>
          <div className="absolute -top-3 -z-10 h-64 w-1/2 animate-custom-pulse rounded-full bg-teal-400 blur-2xl"></div>
          <div className="absolute -top-0 -z-10 h-24 w-1/2 animate-custom-pulse rounded-full bg-teal-50 blur-xl"></div>
          <img
            src={rideBuddy}
            alt="Ride Buddy"
            className="filter-white absolute -top-6 z-10 h-6 w-full animate-floating object-contain"
          />
        </div>
        <div className="order-3 flex flex-1 flex-col items-end justify-end space-y-6 md:space-y-12 lg:space-y-20">
          <h2 className="max-w-sm text-base leading-snug xl:text-xl">
            Our <strong className="bg-teal-100 text-teal-700">Vision</strong> is
            to live in a world where we all share resources to better preserve
            our economy and planet.
          </h2>
          <h2 className="max-w-sm text-base leading-snug xl:text-xl">
            Our <strong className="bg-teal-100 text-teal-700">Mission</strong>{' '}
            is to fill the empty seats in our ride and make our commute more
            affordable and sustainable.
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Intro;
