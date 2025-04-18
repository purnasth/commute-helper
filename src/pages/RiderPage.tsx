import RideBar from '../components/RideBar';
import Title from '../components/ui/Title';

import rider from '../assets/vector/hero-rider.svg';

const RiderPage = () => {
  return (
    <main className="z-auto">
      <Title
        title="Post a ride & Make an Impact"
        description="Share your ride with your co-workers and students sharing the same route and utilize the resources and empty seats of your vehicle. Save money, time and the environment. Your ride can make a difference. Share your ride now & be a hero!"
      />
      <RideBar role="rider" />

      <section className="pt-12 md:pt-16 lg:pt-24">
        <h2 className="mx-auto w-fit max-w-md rounded-full bg-teal-100 px-4 py-1 text-center text-sm font-medium uppercase leading-snug text-teal-700 sm:text-base md:text-xl">
          Rules when posting a ride
        </h2>
        <div className="mt-3 grid items-center gap-6 sm:mt-5 lg:mt-12 lg:grid-cols-2 lg:gap-12">
          <div className="relative">
            <img
              src={rider}
              alt="Hero Vector"
              className="animate-floating-up drop-shadow"
            />
          </div>
          <ul className="list-inside list-decimal space-y-4 md:space-y-6 lg:space-y-12">
            <li className="text-pretty text-sm font-light sm:text-base md:text-lg">
              <strong className="rounded-full bg-teal-100 px-1.5 font-semibold text-teal-700">
                Carry Documents
              </strong>
              - Owning a valid driving license is a must to post a ride & you
              should be carrying them.
            </li>
            <li className="text-pretty text-sm font-light sm:text-base md:text-lg">
              <strong className="rounded-full bg-teal-100 px-1.5 font-semibold text-teal-700">
                Be Reliable
              </strong>
              - Only post a ride if you are sure you're going to the destination
              and be on time.
            </li>
            <li className="text-pretty text-sm font-light sm:text-base md:text-lg">
              <strong className="rounded-full bg-teal-100 px-1.5 font-semibold text-teal-700">
                Be Courteous
              </strong>
              - Be polite to your passengers and respect their time and comfort.
            </li>
            <li className="text-pretty text-sm font-light sm:text-base md:text-lg">
              <strong className="rounded-full bg-teal-100 px-1.5 font-semibold text-teal-700">
                Drive Safely
              </strong>
              - Stick to the speed limit and follow the traffic rules. Safety of
              you and your passengers is important.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default RiderPage;
