import RideBar from '../components/RideBar';
import Title from '../components/ui/Title';
// import { TbClockPin } from 'react-icons/tb';
// import { TbBrandHipchat } from 'react-icons/tb';
// import { TbFileSmile } from 'react-icons/tb';
// import { TbUserShield } from 'react-icons/tb';

import rider from '../assets/vector/passenger.svg';

const PassengerPage = () => {
  return (
    <main className="z-auto">
      <Title
        title="Share a ride & Save the Environment"
        description="Search for a hero who is going to the same destination as you and share a ride with them. Save money, time and the environment. Your ride can make an impact for an environment. Share the ride. Share the memories."
      />
      <RideBar role="passenger" />

      <section className="pt-12 md:pt-16 lg:pt-24">
        <h2 className="mx-auto w-fit max-w-md rounded-full bg-teal-100 px-4 py-1 text-center text-sm font-medium uppercase leading-snug text-teal-700 sm:text-base md:text-xl">
          Rules when finding a ride
        </h2>
        <div className="mt-3 grid items-center gap-6 sm:mt-5 lg:mt-12 lg:grid-cols-2 lg:gap-12">
          <div className="relative">
            <img
              src={rider}
              alt="Hero Vector"
              className="filter-primary absolute inset-0 -z-10 animate-floating-up opacity-30"
            />
            <img
              src={rider}
              alt="Hero Vector"
              className="animate-floating-up drop-shadow"
            />
          </div>
          <ul className="list-inside list-decimal space-y-4 md:space-y-6 lg:space-y-12">
            <li className="text-pretty text-sm font-light sm:text-base md:text-lg">
              <strong className="rounded-full bg-teal-100 px-1.5 font-semibold text-teal-700">
                Be Accessible
              </strong>
              - Be on the location on time and be ready for pickup when the hero
              arrives.
            </li>
            <li className="text-pretty text-sm font-light sm:text-base md:text-lg">
              <strong className="rounded-full bg-teal-100 px-1.5 font-semibold text-teal-700">
                Be Courteous
              </strong>
              - Be polite to your rider and respect their time and comfort.
            </li>
            <li className="text-pretty text-sm font-light sm:text-base md:text-lg">
              <strong className="rounded-full bg-teal-100 px-1.5 font-semibold text-teal-700">
                Be Friendly
              </strong>
              - Engage in pleasant conversation and make the ride enjoyable for
              everyone.
            </li>
            <li className="text-pretty text-sm font-light sm:text-base md:text-lg">
              <strong className="rounded-full bg-teal-100 px-1.5 font-semibold text-teal-700">
                Be Safe
              </strong>{' '}
              - Follow all safety guidelines as a passenger and ensure the ride
              is safe for everyone.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default PassengerPage;
