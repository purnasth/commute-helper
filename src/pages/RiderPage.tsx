import RideBar from '../components/RideBar';
import Title from '../components/ui/Title';
import { TbClockPin } from 'react-icons/tb';
import { TbBrandHipchat } from 'react-icons/tb';
import { TbFileSmile } from 'react-icons/tb';
import { TbUserShield } from 'react-icons/tb';

const RiderPage = () => {
  return (
    <main>
      <Title
        title="Post a ride & Make an Impact"
        description="Share your ride with your co-workers and students sharing the same route and utilize the resources and empty seats of your vehicle. Save money, time and the environment. Your ride can make a difference. Share your ride now & be a hero!"
      />
      <RideBar />

      <section className="pt-24">
        <h3 className="mx-auto w-fit max-w-md rounded-full bg-teal-100 px-4 py-1 text-center text-xl font-medium uppercase leading-snug text-teal-700">
          Rules when posting a ride
        </h3>
        <ul className="mt-16 grid grid-cols-4 gap-8">
          <li className="font-light">
            <TbFileSmile className="mb-6 text-5xl text-teal-400" />
            <strong className="font-semibold">Carry Documents</strong> - Owning
            a valid driving license is a must to post a ride & you should be
            carrying them.
          </li>
          <li className="font-light">
            <TbClockPin className="mb-6 text-5xl text-teal-400" />
            <strong className="font-semibold">Be Reliable</strong> - Only post a
            ride if you are sure you're going to the destination and be on time.
          </li>
          <li className="font-light">
            <TbBrandHipchat className="mb-6 text-5xl text-teal-400" />
            <strong className="font-semibold">Be Courteous</strong> - Be polite
            to your passengers and respect their time and comfort.
          </li>
          <li className="font-light">
            <TbUserShield className="mb-6 text-5xl text-teal-400" />
            <strong className="font-semibold">Drive Safely</strong> - Stick to
            the speed limit and follow the traffic rules. Safety of you and your
            passengers is important.
          </li>
        </ul>
      </section>
    </main>
  );
};

export default RiderPage;
