import RideBar from '../components/RideBar';
import Title from '../components/ui/Title';
// import { TbClockPin } from 'react-icons/tb';
// import { TbBrandHipchat } from 'react-icons/tb';
// import { TbFileSmile } from 'react-icons/tb';
// import { TbUserShield } from 'react-icons/tb';

import rider from '../assets/vector/hero-rider.svg';

const RiderPage = () => {
  return (
    <main className='z-auto'>
      <Title
        title="Post a ride & Make an Impact"
        description="Share your ride with your co-workers and students sharing the same route and utilize the resources and empty seats of your vehicle. Save money, time and the environment. Your ride can make a difference. Share your ride now & be a hero!"
      />
      <RideBar />

      <section className="pt-24">
        <h3 className="mx-auto w-fit max-w-md rounded-full bg-teal-100 px-4 py-1 text-center text-xl font-medium uppercase leading-snug text-teal-700">
          Rules when posting a ride
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
                Carry Documents
              </strong>
              - Owning a valid driving license is a must to post a ride & you
              should be carrying them.
            </li>
            <li className="text-pretty text-lg font-light">
              <strong className="font-semibold text-teal-500">
                Be Reliable
              </strong>
              - Only post a ride if you are sure you're going to the destination
              and be on time.
            </li>
            <li className="text-pretty text-lg font-light">
              <strong className="font-semibold text-teal-500">
                Be Courteous
              </strong>
              - Be polite to your passengers and respect their time and comfort.
            </li>
            <li className="text-pretty text-lg font-light">
              <strong className="font-semibold text-teal-500">
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
