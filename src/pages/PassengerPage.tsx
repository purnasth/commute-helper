import RideBar from '../components/RideBar';
import Title from '../components/ui/Title';
// import { TbClockPin } from 'react-icons/tb';
// import { TbBrandHipchat } from 'react-icons/tb';
// import { TbFileSmile } from 'react-icons/tb';
// import { TbUserShield } from 'react-icons/tb';

import rider from '../assets/vector/passenger.svg';

const PassengerPage = () => {
  return (
    <main>
      <Title
        title="Share a ride & Save the Environment"
        description="Search for a hero who is going to the same destination as you and share a ride with them. Save money, time and the environment. Your ride can make an impact for an environment. Share the ride. Share the memories."
      />
      <RideBar />

      <section className="pt-24">
        <h3 className="mx-auto w-fit max-w-md rounded-full bg-teal-100 px-4 py-1 text-center text-xl font-medium uppercase leading-snug text-teal-700">
          Rules when finding a ride
        </h3>
        <div className="mt-12 grid grid-cols-2 items-center gap-12">
          <div className="relative">
            <img
              src={rider}
              alt="Hero Vector"
              className="animate-floating-up filter-primary absolute inset-0 -z-10 opacity-30"
            />
            <img
              src={rider}
              alt="Hero Vector"
              className="animate-floating-up drop-shadow"
            />
          </div>
          <ul className="list-inside list-decimal space-y-12">
            <li className="text-pretty text-lg font-light">
              <strong className="font-semibold text-teal-500">
                Be Accessible
              </strong>
              - Be on the location on time and be ready for pickup when the hero
              arrives.
            </li>
            <li className="text-pretty text-lg font-light">
              <strong className="font-semibold text-teal-500">
                Be Courteous
              </strong>
              - Be polite to your rider and respect their time and comfort.
            </li>
            <li className="text-pretty text-lg font-light">
              <strong className="font-semibold text-teal-500">
                Be Friendly
              </strong>
              - Engage in pleasant conversation and make the ride enjoyable for
              everyone.
            </li>
            <li className="text-pretty text-lg font-light">
              <strong className="font-semibold text-teal-500">Be Safe</strong> -
              Follow all safety guidelines as a passenger and ensure the ride is
              safe for everyone.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default PassengerPage;
