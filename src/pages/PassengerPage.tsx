import RideBar from '../components/RideBar';
import Title from '../components/ui/Title';
import { TbClockPin } from 'react-icons/tb';
import { TbBrandHipchat } from 'react-icons/tb';
import { TbFileSmile } from 'react-icons/tb';
import { TbUserShield } from 'react-icons/tb';

const PassengerPage = () => {
  return (
    <main>
      <Title
        title="Share a ride & Save the Environment"
        description="Search for a hero who is going to the same destination as you and share a ride with them. Save money, time and the environment. Your ride can make an impact for an environment. Share the ride. Share the memories."
      />
      <RideBar />

      <section className="pt-24">
        <h3 className="mx-auto w-fit max-w-md rounded-full bg-teal-100 px-6 text-center text-2xl leading-snug text-teal-700">
          Rules when finding a ride
        </h3>
        <ul className="mt-16 grid grid-cols-4 gap-8">
          <li className="font-light">
            <TbClockPin className="mb-6 text-5xl text-teal-400" />
            <strong className="font-semibold">Be Accessible</strong> - Be on the
            location on time and be ready for pickup when the hero arrives.
          </li>
          <li className="font-light">
            <TbBrandHipchat className="mb-6 text-5xl text-teal-400" />
            <strong className="font-semibold">Be Courteous</strong> - Be polite
            to your passengers and respect their time and comfort.
          </li>
          <li className="font-light">
            <TbFileSmile className="mb-6 text-5xl text-teal-400" />
            <strong className="font-semibold">Be Friendly</strong> - Engage in
            pleasant conversation and make the ride enjoyable for everyone.
          </li>
          <li className="font-light">
            <TbUserShield className="mb-6 text-5xl text-teal-400" />
            <strong className="font-semibold">Be Safe</strong> - Follow all
            safety guidelines as a passenger and ensure the ride is safe for
            everyone.
          </li>
        </ul>
      </section>
    </main>
  );
};

export default PassengerPage;
